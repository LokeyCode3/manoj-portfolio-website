// NOTE: AES-CBC is used here specifically because the character.enc model file
// was encrypted with this algorithm. The browser may show a non-blocking console
// note about AES-CBC; this is expected and does not affect functionality.
// To migrate to AES-GCM (recommended), the model file must be re-encrypted.

async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to fetch encrypted model: ${response.status} ${response.statusText}`);
    return Promise.reject(new Error("Model fetch failed"));
  }
  const encryptedData = await response.arrayBuffer();
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};

