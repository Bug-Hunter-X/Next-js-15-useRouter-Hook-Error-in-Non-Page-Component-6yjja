```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    // Ensure router is defined before use
    if (router) {
      router.push('/'); 
    } else {
      console.error('Router is not defined');
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}
```