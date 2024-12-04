'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'

export default function LoginForm({ action }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Une erreur est survenue')
      }
      const data = await response.json()
      console.log('Login successful:', data)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Une erreur est survenue')
      }
      const data = await response.json()
      alert('Inscription réussie !')
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = (event) => {
    switch (action) {
      case 'login':
        handleLogin(event)
        break
      case 'inscription':
        handleSignup(event)
        break
      default:
        console.error('Action non valide')
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-24 bg-slate-50">
      <h1 className="text-4xl mt-2 mb-10 text-center">
        {action === 'login' ? 'SE CONNECTER' : "S'INSCRIRE"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col items-left w-full px-6 md:w-2/5"
      >
        <label htmlFor="email">Email</label>
        <input
          className="p-2 drop-shadow-lg rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label className="mt-8" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="p-2 mb-12 drop-shadow-lg rounded"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <Button
          title={action === 'login' ? 'Se connecter' : "S'inscrire"}
          type="submit"
          disabled={email === '' || password === ''}
        />
        <div className="h-12">
          {error && (
            <p className="text-center text-red-500 mt-4 font-bold">{error}</p>
          )}
        </div>
      </form>
    </section>
  )
}
