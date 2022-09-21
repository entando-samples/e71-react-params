import './App.css';

function App({config}) {
  const { contextParams, params} = config || {};
  const { name } = params || {};

  return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello, {name}!
          </p>
            { contextParams && (
                <>
                  <div>Page Code: {contextParams.page_code}</div>
                  <div>Current Language: {contextParams.info_currentLang}</div>
                  <div>Application Base URL: {contextParams.systemParam_applicationBaseURL}</div>
                </>
            )}
        </header>
      </div>
  );
}

export default App;
