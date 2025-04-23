import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment/moment'

const UserTripList = ({userTrips}) => {

    const latestTrip = JSON.parse(userTrips[0]?.tripData)
  return (
    <View>
      <View style={{marginTop:20}}>
        <Image source={require('./../../assets/images/placeholder.jpeg')} style={{width:'100%',height:240,objectFit:'cover',borderRadius:15}} />
        <View style={{marginTop:10}}>
            <Text style={{fontFamily:'medium',fontSize:20}}>{userTrips[0]?.tripPlan?.location}</Text>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <Text style={{fontFamily:'regular',fontSize:17,color:'gray'}}>{moment(latestTrip?.startDate).format('DD MMM YYYY')}</Text>
                <Text style={{fontFamily:'regular',fontSize:17,color:'gray'}}>{latestTrip?.traveler.title}</Text>
                
            </View>
            <TouchableOpacity style={{backgroundColor:'black',padding:15,borderRadius:15,marginTop:10}}>
                <Text style={{color:'white',fontFamily:'medium',textAlign:'center'}}>See your plan</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UserTripList