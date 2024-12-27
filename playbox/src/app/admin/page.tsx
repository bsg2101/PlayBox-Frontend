export default function AdminPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Total Videos</h2>
            <p className="text-3xl font-bold text-blue-600">25</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Total Comments</h2>
            <p className="text-3xl font-bold text-blue-600">128</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Active Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,204</p>
          </div>
        </div>
      </div>
    )
  }