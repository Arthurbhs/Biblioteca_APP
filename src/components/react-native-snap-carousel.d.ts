declare module 'react-native-snap-carousel' {
    import { Component } from 'react';
    import { FlatListProps, ViewStyle, StyleProp } from 'react-native';
  
    export interface CarouselProps<ItemT> extends FlatListProps<ItemT> {
      data: ItemT[];
      renderItem: ({ item, index }: { item: ItemT; index: number }) => React.ReactNode;
      sliderWidth: number;
      itemWidth: number;
      layout?: 'default' | 'stack' | 'tinder';
      loop?: boolean;
      autoplay?: boolean;
      autoplayInterval?: number;
      inactiveSlideScale?: number;
      inactiveSlideOpacity?: number;
      containerCustomStyle?: StyleProp<ViewStyle>;
      contentContainerCustomStyle?: StyleProp<ViewStyle>;
    }
  
    export default class Carousel<ItemT = any> extends Component<CarouselProps<ItemT>> {}
  }
  