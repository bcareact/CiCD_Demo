import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductPagination = () => {
  const { products, total, skip, limit, loading, hasMore, error } = useSelector((state) => state.Product)

  const renderProduct = (item) => (
    <View style={styles.Product}>
      <Text>{item}</Text>

    </View>
  )

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          renderProduct(item)
        )}
      />

    </View>
  )
}

export default ProductPagination

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  Product: {
    borderWidth: 1,
    marginVertical:10,
    elevation:5,
    backgroundColor:'white',
    borderRadius:12,
    borderColor:'lightgray'
  },
  
})