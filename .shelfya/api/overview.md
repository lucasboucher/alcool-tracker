# API and Utility Module Overview

## Overview
This module collection provides the foundational logic and public API for the Alcool Tracker application's core functionalities: tracking alcohol consumption, calculating blood alcohol content (BAC), enforcing regulatory thresholds, managing session data, and delivering health-related contextual information. These utilities underpin the main app flow, power user-centric features, and integrate tightly with the broader frontend React application.

## Key Features

- **Alcohol Consumption State Management**: Local storage handling for user-profiled consumption records, weight, gender, and driving license type with public APIs to get, set, and reset tracked data.
- **BAC (Blood Alcohol Content) Calculation**: Calculates real-time BAC using gender, weight, drink volume, and alcohol percentage for compliance with regulatory guidelines.
- **Driving Ability Determination**: Computes and exposes whether the user is fit to drive given their BAC and regulatory limits, with detailed status and UI color coding support.
- **Health Risk and Advice Messaging**: Supplies guidance messages and structured health stage information, equipping the UI with dynamic, contextually-appropriate advice.
- **User Interaction Utilities**: Helper methods for time formatting, calorie computation, and difference calculations to drive user-facing timers, history, and summary displays.
- **Predictive Safe-to-Drive Time**: Determines when a user will legally be able to drive again based on alcohol elimination rate and user profile.
- **Integration-Ready Public API**: All logic is exposed as importable functions and constants designed to work directly with the UI and state management layers.

## System Errors

- **Invalid Input Error**:  
  _Description_: Public functions such as `getBac()` throw errors if supplied with invalid or incomplete arguments (e.g., missing gender, weight, or type mismatches).  
  _Resolution_: Always ensure correct user data is present before calculations; validate user input forms at the UI layer before calling BAC utilities.

- **Storage Access Error**:  
  _Description_: Methods like `getData()` and `setData()` assume browser localStorage is accessible. In private/incognito modes, or in some environments, storage may be unavailable or restricted.  
  _Resolution_: Hybrid storage or try/catch-wrapped fallbacks are advised if using these utilities in a non-browser or restricted-context environment.

- **Date Handling Error**:  
  _Description_: Time/duration methods presume valid JS Date-compatible strings; malformed or invalid date fields in consumption items can result in `NaN` or unexpected calculations.  
  _Resolution_: Sanitize all user-provided or programmatically-generated dates before saving or processing.

## Usage Examples

```javascript
import { 
  getData, setData, resetData, getBac, canIDrive, getDateToDrive, getRandomAdvices 
} from './utils/helpers';

// Saving consumption event
setData('consumption', [
  { centilitersVolume: 15, alcoholContent: 12, date: new Date().toISOString() }
]);

// Retrieve all records
const consumptions = getData('consumption') || [];

// Calculate BAC for current user
const gender = getData('gender'); // 'male' or 'female'
const weight = getData('weight'); // in kg
const currentBac = getBac(consumptions, gender, weight);

// Determine if user can drive (false = full license, true = probationary)
const temporaryLicense = getData('temporaryLicense');
const driveStatus = canIDrive(currentBac, temporaryLicense); // 'no'|'almost'|'yes'

// Predict when it's legal to drive again
const safeTime = getDateToDrive(currentBac, temporaryLicense);

// Get a random alcohol advice for user tips
const advice = getRandomAdvices();
```

## System Integration

```mermaid
flowchart LR
  dependencies["React App/Sections"] --> thisModule["API & Utility Module"]
  dependencies --> details["LocalStorage\nUser Profile"]
  thisModule --> process[
    "Consumption Management\nBAC Calculation\nDriving Status\nAdvisory Message\nTime/Calorie Helpers"
  ]
  process --> usedBy["App UI & Modals"]
  usedBy --> consumers["End Users\n(Routes: '/', '/changelog')"]
```
