import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0d14',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '3rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '720px',
        width: '100%',
        background: 'rgba(16, 22, 36, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '2.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #d946ef)',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
          }}>⚡</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>Next.js Backend API Server</h1>
        </div>
        
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          This is the standalone Next.js backend service providing REST API endpoints with full CORS support for the React Vite frontend application.
        </p>

        <h2 style={{ fontSize: '1rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Available API Endpoints
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div>
              <span style={{ background: '#10b981', color: '#022c22', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', marginRight: '0.75rem' }}>GET</span>
              <code style={{ color: '#38bdf8', fontSize: '0.9rem' }}>/api/health</code>
              <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.75rem' }}>Server status & uptime</span>
            </div>
            <Link href="/api/health" target="_blank" style={{ color: '#818cf8', fontSize: '0.85rem', textDecoration: 'none' }}>
              Test &rarr;
            </Link>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div>
              <span style={{ background: '#10b981', color: '#022c22', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', marginRight: '0.75rem' }}>GET</span>
              <code style={{ color: '#38bdf8', fontSize: '0.9rem' }}>/api/tasks</code>
              <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.75rem' }}>List all tasks</span>
            </div>
            <Link href="/api/tasks" target="_blank" style={{ color: '#818cf8', fontSize: '0.85rem', textDecoration: 'none' }}>
              Test &rarr;
            </Link>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <span style={{ background: '#3b82f6', color: '#172554', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', marginRight: '0.75rem' }}>POST</span>
            <code style={{ color: '#38bdf8', fontSize: '0.9rem' }}>/api/tasks</code>
            <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.75rem' }}>Create task (JSON payload)</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <span style={{ background: '#f59e0b', color: '#451a03', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', marginRight: '0.75rem' }}>PATCH</span>
            <code style={{ color: '#38bdf8', fontSize: '0.9rem' }}>/api/tasks/:id</code>
            <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.75rem' }}>Update task status</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <span style={{ background: '#f43f5e', color: '#4c0519', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', marginRight: '0.75rem' }}>DELETE</span>
            <code style={{ color: '#38bdf8', fontSize: '0.9rem' }}>/api/tasks/:id</code>
            <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.75rem' }}>Delete task</span>
          </div>
        </div>

        <div style={{
          padding: '1rem',
          borderRadius: '10px',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          fontSize: '0.85rem',
          color: '#c7d2fe',
        }}>
          💡 <strong>Frontend App:</strong> Run the React Vite app on port <strong>5173</strong> to interact with this backend!
        </div>
      </div>
    </div>
  );
}
