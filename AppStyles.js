// AppStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FDF5E6', // Common background color
  },
  darkModeContainer: {
    backgroundColor: '#000', // Dark mode background
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  darkModeText: {
    color: '#FFF', // Text color for dark mode
  },
  contentText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '45%',
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: '#841584', // Button color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
  },
  mediaContainer: {
    width: '45%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  media: {
    width: '100%',
    height: 150,
    backgroundColor: 'black',
  },
  settingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  settingDescription: {
    fontSize: 18,
    marginRight: 10,
  },
  switchTrackColor: {
    false: "#767577",
    true: "#81b0ff"
  },
  switchThumbColor: {
    false: "#f4f3f4",
    true: "#f5dd4b"
  },
});
