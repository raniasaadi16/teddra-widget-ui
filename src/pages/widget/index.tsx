import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet';

const markup = `
<span id="message">First!</span>
<script>
//   window.addEventListener("DOMContentLoaded", function(event) {
    new MyWidget({coll:'datacenters', id: 'fb17c269-1ed1-4cb0-92e6-04d9b712560b',  path:'/fb17c269-1ed1-4cb0-92e6-04d9b712560b/a492dba8-27fc-4f66-a284-1bb08c424b2f'});
//   });
</script>
`;
export default function Widget() {
    // <script src="https://teddra-widget-source.vercel.app/static/js/main.js"></script>
    // <script>
    //   window.addEventListener("DOMContentLoaded", function(event) {
    //     new MyWidget({coll:'datacenters', id: 'fb17c269-1ed1-4cb0-92e6-04d9b712560b',  path:'/fb17c269-1ed1-4cb0-92e6-04d9b712560b/a492dba8-27fc-4f66-a284-1bb08c424b2f'});
    //   });
    // </script>
    const elRef = useRef<any>()
    const [isReady, setisReady] = useState(false);
    
    useEffect(() => {
        if (window && document) {
        
              const script = document.createElement('script')
              const body = document.getElementsByTagName('body')[0]
              script.async = true;
              script.src = 'https://teddra-widget-source.vercel.app/static/js/main.js'
              body.appendChild(script)
                setisReady(true)
                
            }
          }, []) 

          useLayoutEffect(() => {
            if(isReady){ 
                const range = document.createRange();
                range.selectNode(elRef.current);
                const documentFragment = range.createContextualFragment(markup);
                
                // Inject the markup, triggering a re-run! 
                elRef.current.innerHTML = '';
                elRef.current.append(documentFragment);

            }
        }, [isReady]);
      
  return (
    <>
    <div id='app'></div>
    {isReady && (
    <div 
			ref={elRef} 
			dangerouslySetInnerHTML={{ __html: markup }}
/>

    )}
    </>
  )
}
