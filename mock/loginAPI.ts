export default {
  'POST /login/loginNoCaptcha': (req: any, res: any) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'allgone')
      res.json({
        success: true,
        data: 'loginKey',
        code: 200,
      });
  },
};
