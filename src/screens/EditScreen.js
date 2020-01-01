
import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({navigation}) => {
   
    const {state} = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))
    console.log(navigation.getParam('id'))

    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)


    return <View>
        <BlogPostForm/>
    </View>
}

const styles = StyleSheet.create({
    
})

export default EditScreen