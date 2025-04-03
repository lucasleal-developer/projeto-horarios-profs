'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificação básica das credenciais
    if (username === 'admin' && password === 'admin') {
      // Aqui você pode adicionar uma lógica mais complexa de autenticação no futuro
      router.push('/dashboard');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      

      <div className="max-w-md w-full p-6">
        <div className="bg-background-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-text-primary mb-2">
                Sistema de Horários
              </h2>
              <p className="text-sm text-text-secondary">
                Faça login para acessar o sistema
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-text-primary mb-1">
                    Usuário
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-system-primary focus:border-system-primary sm:text-sm text-text-primary"
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-1">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-system-primary focus:border-system-primary sm:text-sm text-text-primary"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-system-primary hover:bg-system-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-system-primary transition-colors duration-200"
                >
                  Logar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
