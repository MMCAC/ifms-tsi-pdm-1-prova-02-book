import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
titleCard: {
    backgroundColor: "#eee",
    widht: "90%",
    paddingHorizontal: "17%",
    paddingVertical: "6%",
    borderRadius: 50,
    boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: 30,
    marginTop: 10,
  },
  titleCardInside: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  firstTitle:{
    color: "white",
    fontSize: 80,
    fontWeight: "800",
  },
  secondTitle: {
    color: "#820B0B",
    fontSize: 30,
    fontWeight: "800",
  },
  thirdTitle:{
    color: "black",
    fontSize: 30,
    fontWeight: "800",
  },

formularioCard: {
    backgroundColor: "#eee",
    widht: "90%",
    paddingHorizontal: 30,
    paddingVertical: "10%",
    borderRadius: 50,
    boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: 30,
    alignItems: "center",
  },
formularioText : {
    fontSize: 30,
    width: "100%",
    fontWeight: "600",
    marginBottom: 30,
  },
input: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    width: 300,
    fontWeight: "500"
  },
formularioButton: {
    backgroundColor: '#820B0B',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 30
},
formularioButtonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
},
});