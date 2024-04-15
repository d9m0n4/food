import ProviderButton from '@/features/auth/ui/providerButton'
import { getProviders } from 'next-auth/react'

const SignInForm = async () => {
  const providers = await getProviders()
  const oAuthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === 'oauth'
  )
  return (
    <div>
      {oAuthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  )
}

export default SignInForm
