import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  returnCard: {
    alignItems: "left",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
  },
  returnCardText: {
    fontSize: 19,
    fontWeight: "500"
  },
  login: {
    marginTop: 30,
  },
  loginCard:{
    marginTop: 40,
    backgroundColor: "#eee",
    widht: "90%",
    paddingHorizontal: 30,
    paddingVertical: "11%",
    borderRadius: 50,
    boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: 30,
    alignItems: "center",
  },
    loginText : {
    fontSize: 30,
    width: "100%",
    fontWeight: "600",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 18,
    fontSize: 18,
    width: 300,
    fontWeight: "500"
  },
    loginButton: {
    backgroundColor: '#820B0B',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 10
},
    loginButtonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
},
});