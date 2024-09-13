import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  livroBotao: {
    backgroundColor: '#820B0B',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  livroTexto: {
    fontSize: 23,
    color: 'white',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: 4,
    marginLeft: 10
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '500'
  },
  livroConteudo: {
    backgroundColor: 'white',
    padding: 20
  },
  livroItem: {
    fontSize: 18,
    fontWeight: "600"
  },
  alterarRow: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: "600",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: 4
  }
});