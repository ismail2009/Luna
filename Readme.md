`grep -rl "s.dependency 'React/Core'" node_modules/ | xargs sed -i '' 's=React/Core=React-Core=g'`

Do dome changes at this path /node_modules/react-native-cached-images/CachedImage.js
```
componentWillMount() {
     this._isMounted = true;
    // replace this with 
      // NetInfo.isConnected.addEventListener(
      //   "connectionChange",
      //
      // );
     this.unsubscribe = NetInfo.addEventListener(state => {
       console.log("Connection type", state.type);
      if(state.isConnected) this.handleConnectivityChange()
     });

     // initial
      // replace this with 
      // NetInfo.isConnected.fetch().then(isConnected => {
      //   this.safeSetState({
      //     networkAvailable: isConnected
      //   });
      // });
     NetInfo.fetch().then(state => {
       this.safeSetState({
         networkAvailable: state.isConnected
       });
     });

 
     this.processSource(this.props.source);
   }
 
   componentWillUnmount() {
     this._isMounted = false;
      // replace this with 
      // NetInfo.isConnected.removeEventListener(
      //   "connectionChange",
      //   this.handleConnectivityChange
      // );
     this.unsubscribe()
   }
