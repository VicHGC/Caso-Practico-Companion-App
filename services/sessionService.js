export const postSession = (payload) => {
  return new Promise((resolve) => {
    console.log('[POST /api/v1/sessions] PAYLOAD ENVIADO:');
    console.log(JSON.stringify(payload, null, 2));

    setTimeout(() => {
      resolve({ success: true, message: 'Session saved successfully' });
    }, 600);
  });
};