// i18n — Password site dictionaries (fleet convention, see Topo/js/i18n.js).
// English source strings ARE the keys, so a missing entry falls back to
// English. Locale comes from carino-lang.js (window.CarinoLang.current);
// this script is deferred and loaded after it, so CarinoLang exists by
// DOMContentLoaded, and we re-apply on the fleet 'carino:langchange' event.
// Japanese deliberately says "PC"-style loanwords, never コンピューター.

const I18N = {
    es: {
        // Translation sweep: strings that stayed in English
        "More": "Más",
        "Part {n} of {m} — you need all {m} parts, sent separately.": "Parte {n} de {m}: necesitas las {m} partes, enviadas por separado.",
        "Part {n} of {m} — you need {k} of the {m} parts, sent separately.": "Parte {n} de {m}: necesitas {k} de las {m} partes, enviadas por separado.",
        "Open them together at: {url}": "Ábrelas juntas en: {url}",
        "one of the parts contains an invalid character": "una de las partes tiene un carácter no válido",
        "every part must start with CS1-": "cada parte debe empezar por CS1-",
        "one of the parts is incomplete": "una de las partes está incompleta",
        "one of the parts was mistyped — check it character by character": "una de las partes está mal escrita: revísala carácter por carácter",
        "one of the parts uses an unknown format (v{n})": "una de las partes usa un formato desconocido (v{n})",
        "one of the parts is damaged": "una de las partes está dañada",
        "there is nothing to split yet": "todavía no hay nada que dividir",
        "pick between 2 and {n} parts": "elige entre 2 y {n} partes",
        "the number needed cannot exceed the number of parts": "las necesarias no pueden ser más que el total de partes",
        "keep it under {n} bytes — this is built for keys and passwords, not documents": "mantenlo por debajo de {n} bytes: esto es para claves y contraseñas, no para documentos",
        "paste the parts first — each one starts with CS1-": "pega primero las partes: cada una empieza por CS1-",
        "these parts are different sizes — they come from different secrets": "estas partes tienen tamaños distintos: vienen de secretos diferentes",
        "part {n} was pasted twice — each part must be different": "la parte {n} se pegó dos veces: cada parte debe ser distinta",
        "this needs {k} parts and you have {n} — the missing ones cannot be guessed": "se necesitan {k} partes y tienes {n}: las que faltan no se pueden adivinar",
        "these parts do not belong together — each is well-formed, but they are from different secrets": "estas partes no van juntas: cada una es válida, pero son de secretos diferentes",
        'Late shift.': 'Turno nocturno.',
        'Good morning.': 'Buenos días.',
        'Good afternoon.': 'Buenas tardes.',
        'Good evening.': 'Buenas noches.',
        // Tabs
        'Generate a password': 'Generar una contraseña',
        'Send a password': 'Enviar una contraseña',
        'Discover a password': 'Descubrir una contraseña',
        // Make view
        'Click to copy — it copies even while hidden.': 'Haz clic para copiar: se copia aunque esté oculta.',
        'Make another': 'Generar otra',
        'Send this safely →': 'Enviarla de forma segura →',
        'Show': 'Mostrar',
        'Hide': 'Ocultar',
        'How long?': '¿Qué longitud?',
        'Easy': 'Fácil',
        'Good': 'Buena',
        'Better': 'Mejor',
        'Strong': 'Fuerte',
        '8 characters': '8 caracteres',
        '12 characters': '12 caracteres',
        '20 characters': '20 caracteres',
        '32 characters': '32 caracteres',
        'Letters and numbers only': 'Solo letras y números',
        'Turn this off to add symbols, if the website accepts them.': 'Desactívalo para añadir símbolos, si el sitio los acepta.',
        // Send view
        'Type or paste the password you need to send': 'Escribe o pega la contraseña que necesitas enviar',
        'Receiving one instead? →': '¿Vas a recibir una? →',
        'Part {n} of {m}': 'Parte {n} de {m}',
        'Copy': 'Copiar',
        'Send each part a different way — one by email, one by text. One part on its own gives nothing away.': 'Envía cada parte por un medio distinto: una por correo, otra por mensaje. Una parte sola no revela nada.',
        // Open view
        'Paste the first message you were sent': 'Pega el primer mensaje que te enviaron',
        'Got it — paste the next part ({n} of {m})': 'Recibida. Pega la siguiente parte ({n} de {m})',
        'Start over': 'Empezar de nuevo',
        // Shared chrome / feedback
        'Copied': 'Copiado',
        'Click to copy': 'Haz clic para copiar',
        'That did not work.': 'Eso no funcionó.',
        'part {n} is already in — this looks like the same message pasted twice': 'la parte {n} ya está: parece el mismo mensaje pegado dos veces',
        'that part belongs to a different secret than the ones above': 'esa parte pertenece a un secreto distinto de las de arriba',
        "Runs in your browser. Nothing you add here is uploaded.": "Funciona en tu navegador. Nada de lo que añades aquí se sube.",
        "Make a strong password and send it safely.": "Crea una contraseña segura y envíala de forma segura.",
        "This page is not allowed to connect anywhere.": "Esta página no tiene permiso para conectarse a ningún sitio.",
        // More control (moved here from Hash)
        'More control: exact length and characters': 'Más control: longitud exacta y caracteres',
        'Length': 'Longitud',
        'Leave out look-alikes (0 O 1 l I)': 'Sin caracteres parecidos (0 O 1 l I)',
        'Pick at least one kind of character.': 'Elige al menos un tipo de carácter.',
        '<b>About {bits} bits of entropy</b>: {n} characters, each one of {k} (about {each} bits apiece), drawn with crypto.getRandomValues. Guessing it takes 2<sup>{half}</sup> tries on average.': '<b>Unos {bits} bits de entropía</b>: {n} caracteres, cada uno entre {k} (unos {each} bits cada uno), elegidos con crypto.getRandomValues. Adivinarla lleva de media 2<sup>{half}</sup> intentos.',
        'More control: more parts, fewer needed': 'Más control: más partes, menos necesarias',
        'Parts': 'Partes',
        'Needed to open': 'Necesarias para abrir',
        'Add a line of instructions to each part': 'Añadir una línea de instrucciones a cada parte',
        'Copy all parts': 'Copiar todas las partes',
        'All {n} parts are needed to open it. Lose one and the password is gone.': 'Se necesitan las {n} partes para abrirla. Si pierdes una, la contraseña se pierde.',
        'Any {k} of the {n} parts open it. {f} or fewer give away nothing, not even its length.': 'Cualquier {k} de las {n} partes la abren. {f} o menos no revelan nada, ni siquiera su longitud.',
        'Part {n}': 'Parte {n}',
    },
    'pt-BR': {
        // Translation sweep: strings that stayed in English
        "More": "Mais",
        "Part {n} of {m} — you need all {m} parts, sent separately.": "Parte {n} de {m} — você precisa de todas as {m} partes, enviadas separadamente.",
        "Part {n} of {m} — you need {k} of the {m} parts, sent separately.": "Parte {n} de {m} — você precisa de {k} das {m} partes, enviadas separadamente.",
        "Open them together at: {url}": "Abra todas juntas em: {url}",
        "one of the parts contains an invalid character": "uma das partes tem um caractere inválido",
        "every part must start with CS1-": "cada parte deve começar com CS1-",
        "one of the parts is incomplete": "uma das partes está incompleta",
        "one of the parts was mistyped — check it character by character": "uma das partes foi digitada errado — confira caractere por caractere",
        "one of the parts uses an unknown format (v{n})": "uma das partes usa um formato desconhecido (v{n})",
        "one of the parts is damaged": "uma das partes está danificada",
        "there is nothing to split yet": "ainda não há nada para dividir",
        "pick between 2 and {n} parts": "escolha entre 2 e {n} partes",
        "the number needed cannot exceed the number of parts": "as necessárias não podem ser mais que o total de partes",
        "keep it under {n} bytes — this is built for keys and passwords, not documents": "mantenha abaixo de {n} bytes — isto é feito para chaves e senhas, não para documentos",
        "paste the parts first — each one starts with CS1-": "cole as partes primeiro — cada uma começa com CS1-",
        "these parts are different sizes — they come from different secrets": "estas partes têm tamanhos diferentes — vêm de segredos diferentes",
        "part {n} was pasted twice — each part must be different": "a parte {n} foi colada duas vezes — cada parte deve ser diferente",
        "this needs {k} parts and you have {n} — the missing ones cannot be guessed": "são necessárias {k} partes e você tem {n} — as que faltam não podem ser adivinhadas",
        "these parts do not belong together — each is well-formed, but they are from different secrets": "estas partes não combinam — cada uma é válida, mas são de segredos diferentes",
        'Late shift.': 'Turno da noite.',
        'Good morning.': 'Bom dia.',
        'Good afternoon.': 'Boa tarde.',
        'Good evening.': 'Boa noite.',
        'Generate a password': 'Gerar uma senha',
        'Send a password': 'Enviar uma senha',
        'Discover a password': 'Descobrir uma senha',
        'Click to copy — it copies even while hidden.': 'Clique para copiar: copia mesmo enquanto está oculta.',
        'Make another': 'Gerar outra',
        'Send this safely →': 'Enviar com segurança →',
        'Show': 'Mostrar',
        'Hide': 'Ocultar',
        'How long?': 'Qual o tamanho?',
        'Easy': 'Fácil',
        'Good': 'Boa',
        'Better': 'Melhor',
        'Strong': 'Forte',
        '8 characters': '8 caracteres',
        '12 characters': '12 caracteres',
        '20 characters': '20 caracteres',
        '32 characters': '32 caracteres',
        'Letters and numbers only': 'Só letras e números',
        'Turn this off to add symbols, if the website accepts them.': 'Desative para incluir símbolos, se o site aceitar.',
        'Type or paste the password you need to send': 'Digite ou cole a senha que você precisa enviar',
        'Receiving one instead? →': 'Vai receber uma? →',
        'Part {n} of {m}': 'Parte {n} de {m}',
        'Copy': 'Copiar',
        'Send each part a different way — one by email, one by text. One part on its own gives nothing away.': 'Envie cada parte por um meio diferente: uma por e-mail, outra por mensagem. Uma parte sozinha não revela nada.',
        'Paste the first message you were sent': 'Cole a primeira mensagem que você recebeu',
        'Got it — paste the next part ({n} of {m})': 'Recebida. Cole a próxima parte ({n} de {m})',
        'Start over': 'Começar de novo',
        'Copied': 'Copiado',
        'Click to copy': 'Clique para copiar',
        'That did not work.': 'Isso não funcionou.',
        'part {n} is already in — this looks like the same message pasted twice': 'a parte {n} já está aqui: parece a mesma mensagem colada duas vezes',
        'that part belongs to a different secret than the ones above': 'essa parte pertence a um segredo diferente das de cima',
        "Runs in your browser. Nothing you add here is uploaded.": "Roda no seu navegador. Nada do que você adiciona aqui é enviado.",
        "Make a strong password and send it safely.": "Crie uma senha forte e envie com segurança.",
        "This page is not allowed to connect anywhere.": "Esta página não tem permissão para se conectar a lugar nenhum.",
        // More control (moved here from Hash)
        'More control: exact length and characters': 'Mais controle: tamanho exato e caracteres',
        'Length': 'Tamanho',
        'Leave out look-alikes (0 O 1 l I)': 'Sem caracteres parecidos (0 O 1 l I)',
        'Pick at least one kind of character.': 'Escolha pelo menos um tipo de caractere.',
        '<b>About {bits} bits of entropy</b>: {n} characters, each one of {k} (about {each} bits apiece), drawn with crypto.getRandomValues. Guessing it takes 2<sup>{half}</sup> tries on average.': '<b>Cerca de {bits} bits de entropia</b>: {n} caracteres, cada um entre {k} (cerca de {each} bits cada), sorteados com crypto.getRandomValues. Adivinhar leva em média 2<sup>{half}</sup> tentativas.',
        'More control: more parts, fewer needed': 'Mais controle: mais partes, menos necessárias',
        'Parts': 'Partes',
        'Needed to open': 'Necessárias para abrir',
        'Add a line of instructions to each part': 'Adicionar uma linha de instruções a cada parte',
        'Copy all parts': 'Copiar todas as partes',
        'All {n} parts are needed to open it. Lose one and the password is gone.': 'As {n} partes são necessárias para abrir. Perca uma e a senha se perde.',
        'Any {k} of the {n} parts open it. {f} or fewer give away nothing, not even its length.': 'Quaisquer {k} das {n} partes abrem. {f} ou menos não revelam nada, nem o tamanho.',
        'Part {n}': 'Parte {n}',
    },
    ja: {
        // Translation sweep: strings that stayed in English
        "More": "その他",
        "Part {n} of {m} — you need all {m} parts, sent separately.": "パート {n}/{m}：別々に送られた {m} 個すべてのパートが必要です。",
        "Part {n} of {m} — you need {k} of the {m} parts, sent separately.": "パート {n}/{m}：別々に送られた {m} 個のうち {k} 個のパートが必要です。",
        "Open them together at: {url}": "まとめて開く場所：{url}",
        "one of the parts contains an invalid character": "パートの 1 つに無効な文字が含まれています",
        "every part must start with CS1-": "各パートは CS1- で始まる必要があります",
        "one of the parts is incomplete": "パートの 1 つが不完全です",
        "one of the parts was mistyped — check it character by character": "パートの 1 つが打ち間違えられています。1 文字ずつ確認してください",
        "one of the parts uses an unknown format (v{n})": "パートの 1 つが不明な形式（v{n}）です",
        "one of the parts is damaged": "パートの 1 つが破損しています",
        "there is nothing to split yet": "まだ分割するものがありません",
        "pick between 2 and {n} parts": "パート数は 2〜{n} の間で選んでください",
        "the number needed cannot exceed the number of parts": "必要数はパート数を超えられません",
        "keep it under {n} bytes — this is built for keys and passwords, not documents": "{n} バイト未満にしてください。これは鍵やパスワード用で、文書用ではありません",
        "paste the parts first — each one starts with CS1-": "先にパートを貼り付けてください。各パートは CS1- で始まります",
        "these parts are different sizes — they come from different secrets": "これらのパートは長さが異なります。別々の秘密のものです",
        "part {n} was pasted twice — each part must be different": "パート {n} が 2 回貼り付けられています。各パートは別々のものである必要があります",
        "this needs {k} parts and you have {n} — the missing ones cannot be guessed": "{k} 個のパートが必要ですが、{n} 個しかありません。足りないパートは推測できません",
        "these parts do not belong together — each is well-formed, but they are from different secrets": "これらのパートは組み合わせられません。どれも正しい形式ですが、別々の秘密のものです",
        'Late shift.': '夜勤お疲れさま。',
        'Good morning.': 'おはようございます。',
        'Good afternoon.': 'こんにちは。',
        'Good evening.': 'こんばんは。',
        'Generate a password': 'パスワードを生成',
        'Send a password': 'パスワードを送る',
        'Discover a password': 'パスワードを受け取る',
        'Click to copy — it copies even while hidden.': 'クリックでコピー。非表示のままでもコピーできます。',
        'Make another': '別のを生成',
        'Send this safely →': 'これを安全に送る →',
        'Show': '表示',
        'Hide': '隠す',
        'How long?': '長さは？',
        'Easy': 'かんたん',
        'Good': '良い',
        'Better': 'より強い',
        'Strong': '強力',
        '8 characters': '8文字',
        '12 characters': '12文字',
        '20 characters': '20文字',
        '32 characters': '32文字',
        'Letters and numbers only': '英数字のみ',
        'Turn this off to add symbols, if the website accepts them.': 'サイトが記号に対応している場合は、オフにして記号を追加できます。',
        'Type or paste the password you need to send': '送りたいパスワードを入力または貼り付け',
        'Receiving one instead? →': '受け取る側ですか？ →',
        'Part {n} of {m}': 'パート {n} / {m}',
        'Copy': 'コピー',
        'Send each part a different way — one by email, one by text. One part on its own gives nothing away.': '各パートは別々の方法で送ってください。1つはメール、もう1つはSMSなど。パート1つだけでは何も分かりません。',
        'Paste the first message you were sent': '受け取った最初のメッセージを貼り付け',
        'Got it — paste the next part ({n} of {m})': '受け付けました。次のパートを貼り付け ({n} / {m})',
        'Start over': 'やり直す',
        'Copied': 'コピーしました',
        'Click to copy': 'クリックでコピー',
        'That did not work.': 'うまくいきませんでした。',
        'part {n} is already in — this looks like the same message pasted twice': 'パート {n} はすでに入力済みです。同じメッセージを2回貼り付けたようです',
        'that part belongs to a different secret than the ones above': 'そのパートは上のものとは別のシークレットのものです',
        "Runs in your browser. Nothing you add here is uploaded.": "ブラウザ内で動作します。ここに追加したものはアップロードされません。",
        "Make a strong password and send it safely.": "強力なパスワードを作り、安全に送れます。",
        "This page is not allowed to connect anywhere.": "このページはどこにも接続できないよう設定されています。",
        // More control (moved here from Hash)
        'More control: exact length and characters': '詳細設定：長さと文字の種類',
        'Length': '長さ',
        'Leave out look-alikes (0 O 1 l I)': '紛らわしい文字を除く (0 O 1 l I)',
        'Pick at least one kind of character.': '文字の種類を1つ以上選んでください。',
        '<b>About {bits} bits of entropy</b>: {n} characters, each one of {k} (about {each} bits apiece), drawn with crypto.getRandomValues. Guessing it takes 2<sup>{half}</sup> tries on average.': '<b>約 {bits} ビットのエントロピー</b>：{k} 種類から選んだ {n} 文字（1文字あたり約 {each} ビット）、crypto.getRandomValues で生成。推測には平均 2<sup>{half}</sup> 回かかります。',
        'More control: more parts, fewer needed': '詳細設定：パートを増やし、必要数を減らす',
        'Parts': 'パート数',
        'Needed to open': '開くのに必要な数',
        'Add a line of instructions to each part': '各パートに説明を1行付ける',
        'Copy all parts': '全パートをコピー',
        'All {n} parts are needed to open it. Lose one and the password is gone.': '開くには {n} パートすべてが必要です。1つでも失うとパスワードは復元できません。',
        'Any {k} of the {n} parts open it. {f} or fewer give away nothing, not even its length.': '{n} パートのうち任意の {k} つで開けます。{f} つ以下では長さも含め何も分かりません。',
        'Part {n}': 'パート {n}',
    },
    ru: {
        // Translation sweep: strings that stayed in English
        "More": "Ещё",
        "Part {n} of {m} — you need all {m} parts, sent separately.": "Часть {n} из {m} — нужны все части ({m}), отправленные по отдельности.",
        "Part {n} of {m} — you need {k} of the {m} parts, sent separately.": "Часть {n} из {m} — нужны {k} из {m} частей, отправленных по отдельности.",
        "Open them together at: {url}": "Откройте их вместе здесь: {url}",
        "one of the parts contains an invalid character": "в одной из частей есть недопустимый символ",
        "every part must start with CS1-": "каждая часть должна начинаться с CS1-",
        "one of the parts is incomplete": "одна из частей неполная",
        "one of the parts was mistyped — check it character by character": "одна из частей набрана с ошибкой — проверьте её посимвольно",
        "one of the parts uses an unknown format (v{n})": "одна из частей в неизвестном формате (v{n})",
        "one of the parts is damaged": "одна из частей повреждена",
        "there is nothing to split yet": "пока нечего делить",
        "pick between 2 and {n} parts": "выберите от 2 до {n} частей",
        "the number needed cannot exceed the number of parts": "нужное число не может быть больше числа частей",
        "keep it under {n} bytes — this is built for keys and passwords, not documents": "не больше {n} байт — это сделано для ключей и паролей, а не для документов",
        "paste the parts first — each one starts with CS1-": "сначала вставьте части — каждая начинается с CS1-",
        "these parts are different sizes — they come from different secrets": "эти части разного размера — они от разных секретов",
        "part {n} was pasted twice — each part must be different": "часть {n} вставлена дважды — все части должны быть разными",
        "this needs {k} parts and you have {n} — the missing ones cannot be guessed": "нужно частей: {k}, у вас: {n} — недостающие угадать нельзя",
        "these parts do not belong together — each is well-formed, but they are from different secrets": "эти части не подходят друг к другу — каждая корректна, но они от разных секретов",
        'Late shift.': 'Ночная смена.',
        'Good morning.': 'Доброе утро.',
        'Good afternoon.': 'Добрый день.',
        'Good evening.': 'Добрый вечер.',
        'Generate a password': 'Создать пароль',
        'Send a password': 'Отправить пароль',
        'Discover a password': 'Получить пароль',
        'Click to copy — it copies even while hidden.': 'Нажмите, чтобы скопировать — копируется даже скрытым.',
        'Make another': 'Создать другой',
        'Send this safely →': 'Отправить безопасно →',
        'Show': 'Показать',
        'Hide': 'Скрыть',
        'How long?': 'Какой длины?',
        'Easy': 'Простой',
        'Good': 'Хороший',
        'Better': 'Лучше',
        'Strong': 'Надёжный',
        '8 characters': '8 символов',
        '12 characters': '12 символов',
        '20 characters': '20 символов',
        '32 characters': '32 символа',
        'Letters and numbers only': 'Только буквы и цифры',
        'Turn this off to add symbols, if the website accepts them.': 'Отключите, чтобы добавить символы, если сайт их принимает.',
        'Type or paste the password you need to send': 'Введите или вставьте пароль, который нужно отправить',
        'Receiving one instead? →': 'Вы получатель? →',
        'Part {n} of {m}': 'Часть {n} из {m}',
        'Copy': 'Копировать',
        'Send each part a different way — one by email, one by text. One part on its own gives nothing away.': 'Отправьте каждую часть разными способами: одну по почте, другую сообщением. Одна часть сама по себе ничего не раскрывает.',
        'Paste the first message you were sent': 'Вставьте первое полученное сообщение',
        'Got it — paste the next part ({n} of {m})': 'Принято. Вставьте следующую часть ({n} из {m})',
        'Start over': 'Начать заново',
        'Copied': 'Скопировано',
        'Click to copy': 'Нажмите, чтобы скопировать',
        'That did not work.': 'Не получилось.',
        'part {n} is already in — this looks like the same message pasted twice': 'часть {n} уже добавлена — похоже, одно и то же сообщение вставлено дважды',
        'that part belongs to a different secret than the ones above': 'эта часть относится к другому секрету, чем части выше',
        "Runs in your browser. Nothing you add here is uploaded.": "Работает в вашем браузере. Ничего из добавленного сюда не загружается.",
        "Make a strong password and send it safely.": "Создайте надёжный пароль и безопасно передайте его.",
        "This page is not allowed to connect anywhere.": "Этой странице запрещено подключаться куда-либо.",
        // More control (moved here from Hash)
        'More control: exact length and characters': 'Больше настроек: точная длина и символы',
        'Length': 'Длина',
        'Leave out look-alikes (0 O 1 l I)': 'Без похожих символов (0 O 1 l I)',
        'Pick at least one kind of character.': 'Выберите хотя бы один вид символов.',
        '<b>About {bits} bits of entropy</b>: {n} characters, each one of {k} (about {each} bits apiece), drawn with crypto.getRandomValues. Guessing it takes 2<sup>{half}</sup> tries on average.': '<b>Около {bits} бит энтропии</b>: {n} символов, каждый из {k} (около {each} бит на символ), выбраны через crypto.getRandomValues. Чтобы угадать, нужно в среднем 2<sup>{half}</sup> попыток.',
        'More control: more parts, fewer needed': 'Больше настроек: больше частей, меньше нужно',
        'Parts': 'Частей',
        'Needed to open': 'Нужно для открытия',
        'Add a line of instructions to each part': 'Добавить строку инструкций к каждой части',
        'Copy all parts': 'Копировать все части',
        'All {n} parts are needed to open it. Lose one and the password is gone.': 'Для открытия нужны все {n} части. Потеряете одну — пароль не восстановить.',
        'Any {k} of the {n} parts open it. {f} or fewer give away nothing, not even its length.': 'Любые {k} из {n} частей открывают его. {f} или меньше не выдают ничего, даже длину.',
        'Part {n}': 'Часть {n}',
    },
};

function currentFleetLang() { return (window.CarinoLang && window.CarinoLang.current) || 'en'; }

function t(key) {
    const dict = I18N[currentFleetLang()];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass, whitespace-normalized so multi-line
// markup still matches its dictionary entry; locale switches stay reversible).
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim().replace(/\s+/g, ' ');
        el.textContent = t(el.dataset.i18nKey);
    });
}

// Prominent title/placeholder attributes, addressed explicitly by id.
function applyAttrI18n() {
    const secretInput = document.getElementById('secretInput');
    if (secretInput) secretInput.placeholder = t('Type or paste the password you need to send');
    ['passwordOutput', 'openedText'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.title = t('Click to copy');
    });
}

// JS-generated surfaces that may already be on screen when the language
// changes: Show/Hide toggles, part cards, receipt rows, the paste box.
// Everything is guarded — the inline app script defines these globals.
function applyDynamicI18n() {
    if (typeof paintPassword === 'function') paintPassword();
    if (typeof paintOpened === 'function') paintOpened();

    const sendToggle = document.getElementById('sendToggle');
    const secretInput = document.getElementById('secretInput');
    if (sendToggle && secretInput)
        sendToggle.textContent = secretInput.type === 'password' ? t('Show') : t('Hide');

    document.querySelectorAll('[data-part-x]').forEach((el) => {
        el.textContent = t('Part {n}').replace('{n}', el.dataset.partX);
    });
    if (typeof paintEntropy === 'function') paintEntropy();
    document.querySelectorAll('[data-part-n]').forEach((el) => {
        el.textContent = t('Part {n} of {m}')
            .replace('{n}', el.dataset.partN).replace('{m}', el.dataset.partM);
    });
    document.querySelectorAll('.copy-btn').forEach((b) => { b.textContent = t('Copy'); });

    const partBox = document.getElementById('partBox');
    if (partBox && typeof openShares !== 'undefined') {
        partBox.placeholder = openShares.length
            ? t('Got it — paste the next part ({n} of {m})')
                .replace('{n}', openShares.length + 1).replace('{m}', openShares[0].k)
            : t('Paste the first message you were sent');
    }
}

function applyI18n() {
    document.documentElement.lang = currentFleetLang();
    applyStaticI18n();
    applyAttrI18n();
    applyDynamicI18n();
}

// carino-lang.js is deferred and executes before this (also deferred, later in
// the document), so CarinoLang exists by DOMContentLoaded.
document.addEventListener('DOMContentLoaded', applyI18n);
window.addEventListener('carino:langchange', applyI18n);
