<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>聖なる面談の申し込み（管理者通知）</title>
</head>
<body style="font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif; line-height: 1.8; color: #1a1a1a; font-size: 14px;">
    <p style="margin: 0 0 1.5rem;">管理者各位</p>

    <p style="margin: 0 0 1.5rem;">
        Webサイトより「聖なる面談の申し込み」が届きました。<br>
        下記の内容をご確認のうえ、対応をお願いいたします。
    </p>

    <p style="margin: 0 0 0.5rem; font-weight: bold;">■ 受付番号</p>
    <p style="margin: 0 0 1.5rem;">{{ $pledge['reference'] }}</p>

    <table style="border-collapse: collapse; width: 100%; max-width: 640px; margin-bottom: 1.5rem;">
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top; white-space: nowrap; font-weight: normal; color: #525252;">氏名</th>
            <td style="padding: 0.5rem 0;">{{ $pledge['full_name'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top; white-space: nowrap; font-weight: normal; color: #525252;">貴社名</th>
            <td style="padding: 0.5rem 0;">{{ $pledge['company'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top; white-space: nowrap; font-weight: normal; color: #525252;">連絡先アドレス</th>
            <td style="padding: 0.5rem 0;">{{ $pledge['email'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top; white-space: nowrap; font-weight: normal; color: #525252;">電話番号</th>
            <td style="padding: 0.5rem 0;">{{ $pledge['phone'] }}</td>
        </tr>
        <tr>
            <th style="text-align: left; padding: 0.5rem 1rem 0.5rem 0; vertical-align: top; white-space: nowrap; font-weight: normal; color: #525252;">汝の声の詳細</th>
            <td style="padding: 0.5rem 0; white-space: pre-wrap;">{{ $pledge['message'] }}</td>
        </tr>
    </table>

    <p style="margin: 0; font-size: 0.875rem; color: #525252;">
        ※ 返信の際は、上記「連絡先アドレス」宛にご連絡ください。
    </p>
</body>
</html>
