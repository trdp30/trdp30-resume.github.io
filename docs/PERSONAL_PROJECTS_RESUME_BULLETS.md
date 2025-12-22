# Personal Projects - Ready-to-Use Resume Bullets

## Quick Reference: FAANG-Formatted Resume Bullets

---

## Project 1: Jatayat - Real-Time Transportation Tracking

### Option A: Comprehensive (3-4 bullets)

```
Jatayat - Real-Time Public Transportation Tracking Platform
React Native, TypeScript, GraphQL, PostgreSQL, Firebase, Native Android (Kotlin)

• Architected and developed Jatayat, a real-time public transportation tracking platform 
  with React Native mobile apps (iOS/Android) and GraphQL backend, enabling passengers 
  to track buses in real-time with sub-second location updates and supporting thousands 
  of concurrent users

• Built native Android modules (Kotlin) for high-performance geospatial calculations, 
  implementing parallel batch processing using thread pool executors (CPU cores - 1, 
  min 2, max 8 threads), achieving <1ms per calculation and processing hundreds of vehicles 
  simultaneously

• Designed real-time location tracking system using Firebase Realtime Database 
  (GeoFire-compatible) with adaptive location updates (5s moving, 30s stationary) and 
  background foreground services supporting 60-90 minute tracking sessions with 
  automatic permission revocation detection

• Implemented GraphQL backend with PostgreSQL/Prisma ORM featuring advanced filtering 
  (nested relationships, logical operators AND/OR/NOT), role-based access control 
  (DRIVER/ADMIN/SUPER_ADMIN), and comprehensive vehicle/journey management APIs, deployed 
  on Google Cloud Run
```

### Option B: Concise (2 bullets)

```
Jatayat - Real-Time Transportation Tracking | React Native, GraphQL, Firebase, Native Android
• Built real-time vehicle tracking platform with React Native mobile apps and GraphQL 
  backend, processing hundreds of vehicles with sub-second location updates using native 
  Android geospatial modules achieving <1ms per calculation

• Architected native Android modules (Kotlin) for high-performance geospatial calculations 
  with parallel batch processing, supporting thousands of concurrent users with background 
  location tracking and automatic permission management
```

### Option C: Single Bullet (Space-Constrained)

```
Jatayat - Real-Time Transportation Tracking | React Native, GraphQL, Firebase, PostgreSQL, Native Android
• Built full-stack real-time vehicle tracking platform with React Native mobile apps, 
  GraphQL backend, and native Android geospatial modules, processing hundreds of vehicles 
  with sub-second updates using parallel batch processing (<1ms per calculation) and 
  supporting thousands of concurrent users
```

---

## Project 2: Appointment Booking System

### Option A: Comprehensive (3-4 bullets)

```
Appointment Booking System - Multi-Tenant Clinic Management Platform
React, Module Federation, Hasura DDN, PostgreSQL, Node.js, Firebase

• Architected and developed a multi-tenant appointment booking system for clinic visits 
  using Module Federation (Rsbuild) and Hasura DDN, enabling patients to book appointments 
  with real-time queue management and supporting multiple clinics with isolated data 
  and configurations

• Built real-time queue management system using PostgreSQL triggers for automatic queue 
  position calculation, estimating wait times based on appointment duration and processing 
  hundreds of concurrent bookings with GraphQL subscriptions for live status updates

• Designed GraphQL backend with Hasura DDN and Node.js Lambda connectors, implementing 
  custom business logic for booking validation, queue calculation, and multi-tenant 
  data isolation with PostgreSQL/PostGIS for geospatial clinic location search

• Developed Express.js authentication service with Firebase integration, managing user 
  sync and Hasura JWT claims with rate limiting (100 req/15min global, 20 req/15min auth), 
  CORS, input sanitization, and security headers, deployed on Google Cloud Run
```

### Option B: Concise (2 bullets)

```
Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL
• Built multi-tenant appointment booking system using Module Federation and Hasura DDN, 
  implementing real-time queue management with PostgreSQL triggers for automatic position 
  calculation and supporting hundreds of concurrent bookings

• Architected GraphQL backend with Hasura DDN and Node.js Lambda connectors for custom 
  business logic, including booking validation, queue calculation, and multi-tenant 
  data isolation
```

### Option C: Single Bullet (Space-Constrained)

```
Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL, Node.js
• Developed multi-tenant appointment booking system with Module Federation frontend and 
  Hasura DDN GraphQL backend, implementing real-time queue management using PostgreSQL 
  triggers and supporting hundreds of concurrent bookings across multiple clinics
```

---

## Combined Section Format (Both Projects)

### Full Section (Recommended if you have space)

```
Personal Projects

Jatayat - Real-Time Transportation Tracking | React Native, GraphQL, Firebase, PostgreSQL, Native Android
• Built real-time vehicle tracking platform with React Native mobile apps and GraphQL 
  backend, processing hundreds of vehicles with sub-second location updates using native 
  Android geospatial modules achieving <1ms per calculation
• Architected native Android modules (Kotlin) for high-performance geospatial calculations 
  with parallel batch processing, supporting thousands of concurrent users with background 
  location tracking

Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL, Node.js
• Developed multi-tenant appointment booking system using Module Federation and Hasura 
  DDN, implementing real-time queue management with PostgreSQL triggers for automatic 
  position calculation
• Built GraphQL backend with Node.js Lambda connectors for custom business logic and 
  Express.js authentication service with Firebase integration, deployed on Google Cloud Run
```

### Compact Section (Space-Constrained)

```
Personal Projects

Jatayat | React Native, GraphQL, Firebase, Native Android
• Real-time vehicle tracking platform with React Native apps and GraphQL backend, 
  processing hundreds of vehicles with native Android geospatial modules (<1ms per 
  calculation), supporting thousands of concurrent users

Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL
• Multi-tenant appointment booking system with Module Federation frontend and Hasura 
  DDN backend, implementing real-time queue management using PostgreSQL triggers
```

---

## Integration into Existing Resume Sections

### Option 1: Separate "Personal Projects" Section
Place after "Professional Experience" and before "Technical Skills"

### Option 2: Integrate into "Technical Skills"
Add as a subsection:
```
Technical Skills

[... existing skills ...]

Personal Projects:
• Jatayat: Real-time transportation tracking with React Native, GraphQL, Firebase
• Appointment Booking: Multi-tenant clinic management with Module Federation, Hasura DDN
```

### Option 3: Add to "Key Achievements"
Include as additional achievements:
```
Key Achievements

[... existing achievements ...]

• Architected full-stack real-time transportation tracking platform (Jatayat) with React 
  Native mobile apps and native Android geospatial modules, processing hundreds of 
  vehicles with <1ms calculation performance
• Built multi-tenant appointment booking system with Module Federation and Hasura DDN, 
  implementing real-time queue management with PostgreSQL triggers
```

---

## Metrics to Add (If Available)

### Jatayat Metrics:
- "Supporting 500+ daily active users"
- "Processing 200+ vehicles simultaneously"
- "99.9% uptime"
- "Sub-second location updates"
- "<1ms per geospatial calculation"

### Appointment Booking Metrics:
- "Supporting 50+ clinics"
- "Processing 1000+ appointments monthly"
- "Real-time queue updates with <500ms latency"
- "99.5% booking success rate"

### Example with Metrics:
```
Jatayat - Real-Time Transportation Tracking | React Native, GraphQL, Firebase, PostgreSQL
• Built real-time vehicle tracking platform supporting 500+ daily active users, processing 
  200+ vehicles simultaneously with sub-second location updates using native Android 
  geospatial modules achieving <1ms per calculation
```

---

## Technology Keywords for ATS

### Jatayat:
- React Native, TypeScript, GraphQL, Apollo Client, Redux, Redux Saga
- PostgreSQL, Prisma ORM, Firebase, Firebase Realtime Database
- Native Android, Kotlin, Native Modules, Foreground Services
- Google Maps API, Geospatial Calculations, Real-time Systems
- Docker, Google Cloud Run, CI/CD

### Appointment Booking:
- React, TypeScript, Module Federation, Micro-frontend
- Hasura DDN, GraphQL, PostgreSQL, PostGIS
- Node.js, Express.js, Lambda Functions
- Firebase Authentication, JWT, Multi-tenant Architecture
- Cypress, E2E Testing, Tailwind CSS

---

## Final Recommendations

1. **Use Option B (Concise)** for most resumes - provides good balance of detail and space
2. **Use Option C (Single Bullet)** if space is very limited
3. **Add metrics** if you have real usage data
4. **Highlight unique skills** not in work experience (React Native, native modules, Module Federation)
5. **Focus on technical complexity** and architecture decisions
6. **Keep it concise** - 2-3 bullets per project maximum

---

## Quick Copy-Paste Templates

### Template 1: Full Section (Recommended)
```
Personal Projects

Jatayat - Real-Time Transportation Tracking | React Native, GraphQL, Firebase, PostgreSQL, Native Android
• Built real-time vehicle tracking platform with React Native mobile apps and GraphQL 
  backend, processing hundreds of vehicles with sub-second location updates using native 
  Android geospatial modules achieving <1ms per calculation
• Architected native Android modules (Kotlin) for high-performance geospatial calculations 
  with parallel batch processing, supporting thousands of concurrent users with background 
  location tracking

Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL, Node.js
• Developed multi-tenant appointment booking system using Module Federation and Hasura 
  DDN, implementing real-time queue management with PostgreSQL triggers for automatic 
  position calculation
• Built GraphQL backend with Node.js Lambda connectors for custom business logic and 
  Express.js authentication service with Firebase integration, deployed on Google Cloud Run
```

### Template 2: Compact (Space-Constrained)
```
Personal Projects

Jatayat | React Native, GraphQL, Firebase, Native Android
• Real-time vehicle tracking platform with React Native apps and GraphQL backend, 
  processing hundreds of vehicles with native Android geospatial modules (<1ms per 
  calculation), supporting thousands of concurrent users

Appointment Booking System | React, Module Federation, Hasura DDN, PostgreSQL
• Multi-tenant appointment booking system with Module Federation frontend and Hasura 
  DDN backend, implementing real-time queue management using PostgreSQL triggers
```

