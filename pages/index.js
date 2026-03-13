export default function Home() {
  // Client-side redirect to the working HTML file
  if (typeof window !== 'undefined') {
    window.location.replace('/tracker.html')
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#f9fafb'
    }}>
      <div style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }}>
        🎯 AI Study Tracker
      </div>
      <div style={{
        fontSize: '18px',
        color: '#6b7280'
      }}>
        Loading your study tracker...
      </div>
    </div>
  )
}
