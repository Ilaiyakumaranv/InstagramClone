import react from "react";
import { View, StyleSheet, Image } from 'react-native';



export function HeaderImage({children,style, ...props}) {
  return (
  <Image {...props} style={[styles.image, style]}>
    {children}
  </Image>
  );   
}

const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
  }
})