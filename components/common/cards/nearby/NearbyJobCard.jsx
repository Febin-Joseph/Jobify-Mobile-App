import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageUrl } from '../../../../utils'


const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageUrl(job.employer_logo) 
            ? job.employer_logo 
            : "https://o.remove.bg/downloads/583bd546-e268-4001-8a26-faa8c3e26a9a/original-8a3114ac067714ed900bb8437175ec7c-removebg-preview.png"}}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      


      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>

        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard