import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'RobotoSlab', src: '/RobotoSlab-Regular.ttf' });

const horizontalMargin = 80;

const styles = StyleSheet.create({
	page: {
    marginTop: 30,
    fontFamily: 'RobotoSlab'
  },
  center: {
    textAlign: 'center'
  },
  header: {
    fontSize: 13,
    marginBottom: 20
  },
  section: {
    fontSize: 12,
    marginLeft: horizontalMargin,
    marginRight: horizontalMargin,
    marginTop: 7
  },
  bold: {
    fontWeight: 'bold'
  },
  underline: {
    textDecoration: 'underline'
  }
});

const experience = (experience) => {
  return experience.map(job => {
    const description = job.description.map(line => {
      return(
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 10, marginBottom: 4}}>• {line}</Text>
          
        </View>
      )
    });

    return (
      <View style={{marginLeft: 5}}>
        <Text style={{marginTop: 5}}>{job.company}</Text>
        <Text style={{marginTop: 2}}>{job.title}</Text>
        <Text style={{marginTop: 2, marginBottom: 10}}>{job.timespan}</Text>
        {description}
      </View>
    )
  })
}

const education = (experience) => {
  return experience.map(job => {
    return (
      <View style={{marginLeft: 5}}>
        <Text style={{marginTop: 5}}>{job.program}</Text>
        <Text style={{marginTop: 2, marginLeft: 5}}>{job.institute}</Text>
        <Text style={{marginTop: 2, marginLeft: 5, marginBottom: 10}}>{job.timespan}</Text>
      </View>
    )
  })
}

const skills = ['Ruby', 'JavaScript', 'React.js', 'AWS', 'Docker', 'Ruby on Rails'].map(skill => {
  return(
    <Text style={{marginBottom: 2}}>• {skill}</Text>
  )
})

export default function Resume(props) {
	return(
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.center}>{props.data.me.name}</Text>
          <Text style={styles.center}>{props.data.me.phone}</Text>
          <Text style={styles.center}>{props.data.me.email}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.bold, styles.underline]}>Experience</Text>
          {experience(props.data.experience)}
        </View>

        <View style={styles.section}>
          <Text style={[styles.bold, styles.underline]}>Education</Text>
          {education(props.data.education)}
        </View>

        <View style={styles.section}>
          <Text style={[styles.bold, styles.underline]}>Skills</Text>
          <View style={{fontSize: 10, marginLeft: 5}}>
            {skills}
          </View>
        </View>
      </Page>
    </Document>
  )
}
