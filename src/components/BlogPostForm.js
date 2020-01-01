import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'


const BlogPostForm = ({onSubmit}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return <View>
        <Text style={styles.lable}> Enter Title</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}>
        </TextInput>
        <Text style={styles.lable}> Enter Content</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={text => setContent(text)}>
        </TextInput>
        <Button title="Save Blog Post"
         onPress={()=> {
            
            onSubmit(title,content)
        }}/>
    </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }, lable: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm

