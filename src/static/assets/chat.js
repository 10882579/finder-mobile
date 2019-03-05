import { StyleSheet,  Dimensions } from 'react-native';
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
    marginBottom: 5,
  },
  imageContainer:{
    height: 80,
    width: 80,
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
  chatContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    zIndex: 9999,
  },
  headerIcon: {
    color: 'black',
    fontSize: 24,
  },
  userImageContainer:{ 
    width: 40,
    height: 40,
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
  messagesContainer:{
    flex: 1,
    marginTop: 50,
    backgroundColor: '#f2f2f2',
  },
  messageListItem: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 7,
  },
  messageItemImageContainer:{
    width: 40,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  messageItemImage: {
    width: 40,
    height: 40,
    borderRadius: radius,
    overflow: 'hidden',
  },
  messageItemContext: {
    backgroundColor: 'white',
    width: '60%',
    padding: 7,
    borderRadius: 5,
  },
  senderUsername: {
    fontFamily: 'Default',
    color: '#1aa3ff',
    marginBottom: 7,
  },
  messageText: {
    fontFamily: 'Default',
    textAlign: 'justify',
  },
  messageTimeText:{
    marginTop: 5,
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 13,
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
    minHeight: 50,
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
