---
title: GeolocatorPositionAccuracy
sidebar_label: GeolocatorPositionAccuracy
---

Represent the possible location accuracy values.

    LOWEST = "lowest"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    BEST = "best"
    BEST_FOR_NAVIGATION = "bestForNavigation"
    REDUCED = "reduced"

`GeolocatorPositionAccuracy` enum has the following values:

### `LOWEST`

Location is accurate within a distance of 3000m on iOS and 500m on Android.

On Android, corresponds to [PRIORITY_PASSIVE](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_passive).

### `LOW`

Location is accurate within a distance of 1000m on iOS and 500m on Android.

On Android, corresponds to [PRIORITY_LOW_POWER](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_low_power).

### `MEDIUM`

Location is accurate within a distance of 100m on iOS and between 100m and 500m on Android.

On Android, corresponds to [PRIORITY_BALANCED_POWER_ACCURACY](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_balanced_power_accuracy).

### `HIGH`

Location is accurate within a distance of 10m on iOS and between 0m and 100m on Android.

On Android, corresponds to [PRIORITY_HIGH_ACCURACY](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_high_accuracy).

### `BEST`

Location is accurate within a distance of ~0m on iOS and between 0m and 100m on Android.

On Android, corresponds to [PRIORITY_HIGH_ACCURACY](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_high_accuracy).

### `BEST_FOR_NAVIGATION`

Location accuracy is optimized for navigation on iOS and matches the [BEST](#best) on Android.

On Android, corresponds to [PRIORITY_HIGH_ACCURACY](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_high_accuracy).

### `REDUCED`

Location accuracy is reduced for iOS 14+ devices, matches the [LOWEST](#lowest) on iOS 13 and below and all other platforms.

On Android, corresponds to [PRIORITY_PASSIVE](https://developers.google.com/android/reference/com/google/android/gms/location/Priority#public-static-final-int-priority_passive).