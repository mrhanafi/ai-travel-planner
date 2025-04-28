import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
// import {  generateAiSession } from "../../config/AiModal";
import { GoogleGenAI } from "@google/genai";
import axios from 'axios';
import { useRouter } from "expo-router";
import {auth,db} from './../../config/FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";
import OpenAI from "openai";


const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading,setLoading] = useState(false);
  // const GEMINI_API_KEY = '';
  // const OPENAI_KEY = '';
// const BASE_URL = 'https://api.openai.com/v1/responses';
// const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const user=auth.currentUser;
const router = useRouter();
  useEffect(() => {
    GenerateAiTrip();
  },[]);

  const GenerateAiTrip = async () => {

    setLoading(true);
    try {
      const FINAL_PROMPT = AI_PROMPT.replace('{location}',tripData?.locationInfo?.name)
    .replace('{totalDays}',tripData?.totalNumberOfDays)
    .replace('{totalNight}',tripData?.totalNumberOfDays-1)
    .replace('{traveler}',tripData?.traveler?.title)
    .replace('{budget}',tripData?.budget)
    .replace('{totalDays}',tripData?.totalNumberOfDays)
    .replace('{totalNight}',tripData?.totalNumberOfDays-1);

    console.log(FINAL_PROMPT);

    // const resp = await generateOpenAi(FINAL_PROMPT);

    // console.log(resp);

    const client = new OpenAI({
      apiKey: OPENAI_KEY
    });
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: FINAL_PROMPT,
      text:{
        format:{
          type:"json_object"
        }
      }
  });

  console.log(response.output_text);

      // const response = await axios.post(
      //   `${BASE_URL}?key=${GEMINI_API_KEY}`,
      //   {
      //     contents: [{ parts: [{ text: FINAL_PROMPT }] }],
      //     generationConfig: { 
      //       response_mime_type: "application/json",
      //       // response_schema:{
      //       //   items:{
      //       //     type:'ARRAY', 
      //       //     properties:{
      //       //       location:{type:"STRING"},
      //       //       travelers:{type:"STRING"},
      //       //       budget:{type:"STRING"},
      //       //       duration:{type:"STRING"},
      //       //       itenerary:{type:"OBJECT"},
      //       //       flights:{type:"OBJECT"},
      //       //       hotels:{type:"OBJECT"},
      //       //     }
      //       //   }
      //       // }
      //     }
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
  
      // const result = response.data?.candidates[0]?.content?.parts[0]?.text;
      // console.log(result);
      const tripResponse = JSON.parse(response.output_text);
      setLoading(false);

      const docId = (Date.now()).toString();
      const resultToDb = await setDoc(doc(db,"UserTrips",docId),{
        userEmail:user.email,
        tripPlan: tripResponse,  //Ai Result data
        tripData:JSON.stringify(tripData),  //User selection data
        docId:docId
      })


        router.push('(tabs)/mytrip')
    } catch (error) {
      console.error('Gemini API Error:', error.message);
      return 'Error generating response';
    }
    

    // const ai = new GoogleGenAI({ apiKey: process.env.EXPO_GEMINI_KEY });

    // const chatSession = await ai.models.generateContent({
    //   model: "gemini-2.0-flash",
    //   contents: FINAL_PROMPT,
    //   // contents: "Explain how AI works in a few words",
    // });

    // // const result = await chatSession.ge
    // // const result = await generateAiSession(FINAL_PROMPT);
    // console.log(chatSession.text);
    
  }
  return (
    <View style={{padding:25,paddingTop:75, backgroundColor:'white',height:'100%'}}>
      <Text style={{fontFamily:'bold',fontSize:35, textAlign:'center'}}>Please Wait...</Text>
      <Text style={{fontFamily:'medium',fontSize:20, textAlign:'center',marginTop:40}}>We are working to generate your dream trip</Text>
      <Image source={require('./../../assets/images/plane.gif')} style={{width:'100%',height:200,objectFit:'contain'}} />
      <Text style={{fontFamily:'regular',color:'gray',fontSize:20, textAlign:'center'}}>Do not go back</Text>
    </View>
  );
};

export default GenerateTrip;
