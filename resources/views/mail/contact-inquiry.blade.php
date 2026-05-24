<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>お問い合わせ</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a;">
    <h1 style="font-size: 1.25rem; margin-bottom: 1.5rem;">Webサイトからお問い合わせがありました</h1>

    <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top;">お名前</th>
            <td style="padding: 0.5rem 0;">{{ $inquiry['name'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top;">メールアドレス</th>
            <td style="padding: 0.5rem 0;">{{ $inquiry['email'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top;">お問い合わせ内容</th>
            <td style="padding: 0.5rem 0;">{{ $inquiryTypeLabel }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top;">メッセージ</th>
            <td style="padding: 0.5rem 0; white-space: pre-wrap;">{{ $inquiry['message'] }}</td>
        </tr>
    </table>
</body>
</html>
