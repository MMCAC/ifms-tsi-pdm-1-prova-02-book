import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#820B0B',
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#fff',
  },
  iconCard: {
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: "#eee",
    widht: "90%",
    paddingHorizontal: "17%",
    paddingVertical: "15%",
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 30,
    marginTop: 10,

    // Sombra para Android
    elevation: 5,
  },
  imagem: {
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  infoCard: {
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 10
  },
  tituloDados: {
    fontWeight: "600",
    fontSize: 30,
    paddingVertical: 30
  },
  insideInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  infoName: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    width: 300,
  },
  info: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',

  },
  infoText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bioView: {
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 21,
    borderRadius: 20,
    width: 300,
    marginBottom: 20
  },
  returnCard: {
    alignItems: "flex-end",
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
  inputD: {
    height: 50,
    width: 100,
    paddingHorizontal: 10,
    alignContent: 'center',
    textAlign: 'center'
  }
});