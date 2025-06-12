Nitro

An application for store all of your car service history in one place.

Technology used:

- React Native
- TypeScript
- Zustand - for global state management
- React Query - for data fetching and caching
- Persist - saving data to AsyncStorage ( for offline mode)
- Tanstack DevTools - for debugging and development
- Clerk - for managing user authentication and authorization
- React Navigation
- Nativewind - for styling
- Postgres - for database
- Prisma - for ORM
- AWS S3 - for file storage
- Vercel - for hosting the backend
- Docker - for backend part of the application
- React Hook Form - for form management and validation

# React Native Best Practices

## 1. Project Structure

- Use a modular folder structure:

```
src/
  components/        # Reusable components
  screens/          # Screen components
  services/         # API services
  store/            # Zustand store
  utils/            # Utility functions
  assets/           # Images, fonts, etc.
  navigation/       # Navigation setup
  styles/           # Global styles
```

- Keep screens, logic, and UI separated.
- Use barrel exports (index.ts) for folders to simplify imports.

## 2. State Management

- Use Zustand for global state management.
- Use React Query (TanStack Query) for data fetching, caching, syncing.
- Keep UI state inside components (useState), not in global store unless needed.

## 3. Navigation

- Use React Navigation with 'native-stack' for navigation.
- Prefer deep linking and typed route definitions.

## 4. Styling

- Use StyleSheet.create or Tailwind CSS (via NativeWind) for performance.
- Avoid inline styles in large components.
- Use responsive units (e.g., Dimensions, useWindowDimensions, react-native-responsive-screen).

## 5. File and Image Uploads

- Store images/documents in AWS S3 or another cloud provider using presigned URLs.
- Avoid storing files in the database.
- Use expo-image-picker or react-native-image-crop-picker.

## 6. Data Persistence and Offline Support

- Use AsyncStorage with Zustand persist middleware.
- Queue unsynced data and sync when online (optional: NetInfo API).
- Use react-native-background-fetch if background syncing is required.

## 7. Authentication

- Use Clerk for user authentication and authorization.
- Implement secure token storage (e.g., SecureStore).
- Protect routes with higher-order components or conditional rendering based on auth state.

## 8. Error Handling and Logging

- Always wrap async logic with try/catch.
- Use Sentry for crash/error tracking.
- Add toast/snackbar feedback for API errors.

## 9. Testing

- Use Jest for unit tests.
- Use React Native Testing Library for component tests.
- Keep tests next to the code they test (e.g., MyComponent.test.tsx).

## 10. Performance Optimization

- Avoid unnecessary re-renders (memoize heavy components).
- Use FlatList instead of ScrollView for long lists.
- Load images with proper resizing/caching (e.g., react-native-fast-image).
- Monitor and reduce bundle size.

## 11. TypeScript

- Always use TypeScript with strict mode.
- Create and reuse types/interfaces for:
- API responses
- Form values
- Navigation params
- Use type-safe store and hooks.

## 12. Security

- Never hardcode secrets in the codebase (use .env + react-native-dotenv).
- Secure file uploads via presigned URLs or backend proxying.

## 13. Official documentations

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [Clerk Documentation](https://clerk.com/docs)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/index.html)
- [Docker Documentation](https://docs.docker.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Postgres Documentation](https://www.postgresql.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Native Testing Library Documentation](https://callstack.github.io/react-native-testing-library/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Sentry Documentation](https://docs.sentry.io/platforms/react-native/)
- [React Hook Form Documentation](https://react-hook-form.com/get-started/)
