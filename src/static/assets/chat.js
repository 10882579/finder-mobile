import { StyleSheet,  Dimensions } from 'react-native';
import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    paddingHorizontal: 7,
  },
  conversationItem: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  imageContainer:{
    height: 80,
    width: 80,
    borderWidth: 1,
		borderColor: '#16222A',
    borderRadius: radius,
    overflow: 'hidden'
  },
  usernameContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  username: {
    fontFamily: 'Default',
    fontSize: 16
  },
  // Chat Screen style 
  chatContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 55 + Constants.statusBarHeight,
    top: 0,
  },
  headerIcon: {
    color: 'black',
    fontSize: 24,
  },
  userImageContainer:{ 
    width: 45,
    height: 45,
    borderWidth: 1,
		borderColor: '#16222A',
    borderRadius: radius,
    overflow: 'hidden'
  },
  headerUsernameContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  usernameText: {
    fontFamily: 'Default',
    fontSize: 18,
  },
  scrollViewContainer:{
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  messagesContainer: {
    flex: 1, 
    marginTop: 55, 
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  messageListItem: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageItemContext: {
    backgroundColor: 'white',
    width: '60%',
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
		borderColor: '#E5E4E0',
  },
  messageText: {
    fontFamily: 'Default',
    textAlign: 'justify',
    fontSize: 14,
  },
  messageTimeText:{
    marginTop: 5,
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  messageCreateContainer: {
    height: 'auto',
    width: width,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    flexDirection: 'row',
  },
  messageInputContainer: {
    flex: 1,
    maxHeight: 100,
    minHeight: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  messageInput: {
    fontFamily: 'Default',
    fontSize: 15,
    textAlign: 'justify',
  },
  sendButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
