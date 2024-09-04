import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
  scroll:{
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  insideContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 50,
  },
  searchText: {
    color: "black",
    fontSize: 30,
    fontWeight: "800"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 30,
    paddingHorizontal: 8,
    width: 380,
    marginTop: 20
  },
  bookContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#820B0B',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "600"

  },
  cover: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#555',
  },
  year: {
    fontSize: 12,
    color: '#999',
  },
  lsitContent: {
    paddingBottom: 20,
  },
});