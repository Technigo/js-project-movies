/**
 * Formats a year into a decade string (e.g., 1985 -> "80's")
 * @param {number} year - The year to format
 * @returns {string} - The formatted decade
 */

export const formatDecade = (year) => {
  // Handle undefined or invalid input
  if (!year || isNaN(year)) {
    return 'Unknown'
  }

  // Convert year to number if it's a string
  const yearNum = Number(year)

  // Create mapping of decade start years to decade names
  const decadeMapping = {
    1950: "50's",
    1960: "60's",
    1970: "70's",
    1980: "80's",
    1990: "90's",
    2000: "00's",
    2010: "10's",
    2020: "20's"
  }

  // Get the decade start year (e.g., 1985 -> 1980)
  const decadeStartYear = Math.floor(yearNum / 10) * 10

  // If year is before 1950, return special label
  if (decadeStartYear < 1950) {
    return 'Before 1950'
  }

  // Convert 1980 to 80's format using the mapping
  // For decades not in our mapping (after 2020s), generate a label
  if (decadeMapping[decadeStartYear]) {
    return decadeMapping[decadeStartYear]
  } else {
    // For future decades, just use the first two digits
    const shortDecade = String(decadeStartYear).slice(-2)
    return `${shortDecade}'s`
  }
}

/**
 * Gets the starting year for a decade
 * @param {string} decadeLabel - The decade label (e.g., "80's")
 * @returns {number} - The decade's starting year (e.g., 1980)
 */
export const getDecadeStartYear = (decadeLabel) => {
  const decadeMappingReverse = {
    "50's": 1950,
    "60's": 1960,
    "70's": 1970,
    "80's": 1980,
    "90's": 1990,
    "00's": 2000,
    "10's": 2010,
    "20's": 2020,
    'Before 1950': 1900
  }

  return decadeMappingReverse[decadeLabel] || 2000 // Default to 2000 if not found
}
