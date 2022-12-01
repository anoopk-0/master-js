/**
 * The Singleton pattern ensures that only one instance of the class exists and typically provides a well-known, i.e., global point for accessing it. The Factory pattern defines an interface for creating objects (no limitation on how many) and usually abstracts the control of which class to instantiate
 *
 * to limit the number of instance to most 1.
 */

function Process(state) {
  this.state = state;
}

//IFFE
const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManger;

  function createProcessManager() {
    pManger = new ProcessManager();

    return pManger;
  }

  return {
    getProcessManager: () => {
      if (!pManger) {
        pManger = createProcessManager();
      }

      return pManger;
    },
  };
})();
