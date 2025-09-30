// src/utils/dateUtils.js

/**
 * Formatta una data dal formato 'YYYY-MM-DD' al formato 'DD MMM YYYY'.
 * @param {string} dateStr - La data in formato 'YYYY-MM-DD'.
 * @returns {string} La data formattata in 'DD MMM YYYY'.
 */

export function formatDate(inputDate) {
    return new Date(inputDate).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })
}