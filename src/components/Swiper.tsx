import React from 'react';
import { FlatList, ListRenderItem, Dimensions } from 'react-native';
import Card from './Card';

const { width } = Dimensions.get('window');

type SwiperProps = {
  data: any[], 
  renderItem: (item: any) => React.ReactNode;
}

const Swiper = ({ data, renderItem } : SwiperProps) => {
  const _renderItem: ListRenderItem<any> = ({ item }) => (
    <Card style={{ width: width / 1.5 }}>
      {renderItem(item)}
    </Card>
  )

  return <FlatList 
    data={data}
    renderItem={_renderItem}
    showsHorizontalScrollIndicator={false}
    horizontal
    snapToInterval={width / 1.5 + 20}
  />
}

export default Swiper;
