import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageUrl } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageUrl(companyLogo)
              ? companyLogo
              : "https://o.remove.bg/downloads/583bd546-e268-4001-8a26-faa8c3e26a9a/original-8a3114ac067714ed900bb8437175ec7c-removebg-preview.png"
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company