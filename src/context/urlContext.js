import React, { createContext, useEffect, useState } from 'react';

// Create a context to hold the current URL
export const UrlContext = createContext();

// Custom hook to access the current URL from the context
// const useUrl = () => useContext(UrlContext);

const UrlProvider = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentUrl(window.location.pathname);
    };

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return (
    <UrlContext.Provider value={currentUrl}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlProvider;

// const App = () => {
//   return (
//     <UrlProvider>
//       {/* Your app components */}
//       <UrlListener />
//     </UrlProvider>
//   );
// };

// const UrlListener = () => {
//   const currentUrl = useUrl();

//   useEffect(() => {
//     // Do something when the URL changes
//     console.log("URL changed", currentUrl);
//   }, [currentUrl]);

//   return null; // You can render any additional UI components here if needed
// };

// export default App;
