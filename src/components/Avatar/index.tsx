import React from 'react';
import { Image, ImageProps } from 'react-native';
import { styles } from './styles';

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return (
    <Image style={[styles.image, selected === true ? styles.selected : undefined]} {...rest} />
  )
}