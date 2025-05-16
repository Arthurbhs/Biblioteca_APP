// src/components/ImageCarousel.tsx
import React, { useRef, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ImageCarouselProps {
  images: number[]; // Expects an array of `require(...)`
  interval?: number; // optional autoplay interval in ms
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);



  // Scroll to next image
  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  // Auto-scroll logic
  useEffect(() => {
    timerRef.current = setInterval(scrollToNext, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return (
    <FlatList
      ref={flatListRef}
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      onScroll={handleScroll}
      renderItem={({ item }) => (
        <View style={styles.carouselItem}>
          <Image source={item} style={styles.image} resizeMode="cover" />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: '100%',
    borderRadius: 12,
  },
});

export default ImageCarousel;
