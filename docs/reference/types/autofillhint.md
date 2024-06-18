---
title: AutofillHint
sidebar_label: AutofillHint
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A collection of commonly used autofill hint strings on different platforms.

`AutofillHint` enum has the following values:

### `ADDRESS_CITY`

The input field expects an address locality (city/town).

### `ADDRESS_CITY_AND_STATE`

The input field expects a city name combined with a state name.

### `ADDRESS_STATE`

The input field expects a region/state.

### `BIRTHDAY`

The input field expects a person's full birth date.

### `BIRTHDAY_DAY`

The input field expects a person's birth day(of the month).

### `BIRTHDAY_MONTH`

The input field expects a person's birth month.

### `BIRTHDAY_YEAR`

The input field expects a person's birth year.

### `COUNTRY_CODE`

The input field expects an [ISO 3166-1-alpha-2](https://www.iso.org/standard/63545.html) country code.

### `COUNTRY_NAME`

The input field expects a country name.

### `CREDIT_CARD_EXPIRATION_DATE`

The input field expects a credit card expiration date.

### `CREDIT_CARD_EXPIRATION_DAY`

The input field expects a credit card expiration day.

### `CREDIT_CARD_EXPIRATION_MONTH`

The input field expects a credit card expiration month.

### `CREDIT_CARD_EXPIRATION_YEAR`

The input field expects a credit card expiration year.

### `CREDIT_CARD_FAMILY_NAME`

The input field expects the holder's last/family name as given on a credit card.

### `CREDIT_CARD_GIVEN_NAME`

The input field expects the holder's first/given name as given on a credit card.

### `CREDIT_CARD_MIDDLE_NAME`

The input field expects the holder's middle name as given on a credit card.

### `CREDIT_CARD_NAME`

The input field expects the holder's full name as given on a credit card.

### `CREDIT_CARD_NUMBER`

The input field expects a credit card number.

### `CREDIT_CARD_SECURITY_CODE`

The input field expects a credit card security code.

### `CREDIT_CARD_TYPE`

The input field expects the type of a credit card, for example "Visa".

### `EMAIL`

The input field expects an email address.

### `FAMILY_NAME`

The input field expects a person's last/family name.

### `FULL_STREET_ADDRESS`

The input field expects a street address that fully identifies a location.

### `GENDER`

The input field expects a gender.

### `GIVEN_NAME`

The input field expects a person's first/given name.

### `IMPP`

The input field expects a URL representing an instant messaging protocol endpoint.

### `JOB_TITLE`

The input field expects a job title.

### `LANGUAGE`

The input field expects the preferred language of the user.

### `LOCATION`

The input field expects a location, such as a point of interest, an address,or another way to identify a location.

### `MIDDLE_INITIAL`

The input field expects a person's middle initial.

### `MIDDLE_NAME`

The input field expects a person's middle name.

### `NAME`

The input field expects a person's full name.

### `NAME_PREFIX`

The input field expects a person's name prefix or title, such as "Dr.".

### `NAME_SUFFIX`

The input field expects a person's name suffix, such as "Jr.".

### `NEW_PASSWORD`

The input field expects a newly created password for save/update.

### `NEW_USERNAME`

The input field expects a newly created username for save/update.

### `NICKNAME`

The input field expects a nickname.

### `ONE_TIME_CODE`

The input field expects a SMS one-time code.

### `ORGANIZATION_NAME`

The input field expects an organization name corresponding to the person, address, or contact information in the other fields associated with this field.

### `PASSWORD`

The input field expects a password.

### `PHOTO`

The input field expects a photograph, icon, or other image corresponding to the company, person, address, or contact information in the other fields associated with this field.

### `POSTAL_ADDRESS`

The input field expects a postal address.

### `POSTAL_ADDRESS_EXTENDED`

The input field expects an auxiliary address details.

### `POSTAL_ADDRESS_EXTENDED_POSTAL_CODE`

The input field expects an extended ZIP/POSTAL code.

### `POSTAL_CODE`

The input field expects a postal code.

### `STREET_ADDRESS_LEVEL1`

The first administrative level in the address. This is typically the province in which the address is located. In the United States, this would be the state. In Switzerland, the canton. In the United Kingdom, the post town.

### `STREET_ADDRESS_LEVEL2`

The second administrative level, in addresses with at least two of them. In countries with two administrative levels, this would typically be the city, town, village, or other locality in which the address is located.

### `STREET_ADDRESS_LEVEL3`

The third administrative level, in addresses with at least three administrative levels.

### `STREET_ADDRESS_LEVEL4`

The finest-grained administrative level, in addresses which have four levels.

### `STREET_ADDRESS_LINE1`

The input field expects the first line of a street address.

### `STREET_ADDRESS_LINE2`

The input field expects the second line of a street address.

### `STREET_ADDRESS_LINE3`

The input field expects the third line of a street address.

### `SUB_LOCALITY`

The input field expects a sublocality.

### `TELEPHONE_NUMBER`

The input field expects a telephone number.

### `TELEPHONE_NUMBER_AREA_CODE`

The input field expects a phone number's area code, with a country -internal prefix applied if applicable.

### `TELEPHONE_NUMBER_COUNTRY_CODE`

The input field expects a phone number's country code.

### `TELEPHONE_NUMBER_DEVICE`

The input field expects the current device's phone number, usually for Sign Up / OTP flows.

### `TELEPHONE_NUMBER_EXTENSION`

The input field expects a phone number's internal extension code.

### `TELEPHONE_NUMBER_LOCAL`

The input field expects a phone number without the country code and area code components.

### `TELEPHONE_NUMBER_LOCAL_PREFIX`

The input field expects the first part of the component of the telephone number that follows the area code, when that component is split into two components.

### `TELEPHONE_NUMBER_LOCAL_SUFFIX`

The input field expects the second part of the component of the telephone number that follows the area code, when that component is split into two components.

### `TELEPHONE_NUMBER_NATIONAL`

The input field expects a phone number without country code.

### `TRANSACTION_AMOUNT`

The amount that the user would like for the transaction (e.g. when entering a bid or sale price).

### `TRANSACTION_CURRENCY`

The currency that the user would prefer the transaction to use, in [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).

### `URL`

The input field expects a URL.

### `USERNAME`

The input field expects a username or an account name.
