import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'

import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SignOutButton } from '../../src/components/SignOutButton'

import { useTranslation } from 'react-i18next'

export default function Page() {
  const { t } = useTranslation()
  const { user } = useUser()

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <View className="bg-red-500 size-10">
          <Text>Dashboard</Text>
        </View>
        <Text>{t('appName')}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}
