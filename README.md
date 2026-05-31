# Rigenia Lab — la tua app

Questo è il pacchetto completo dell'app Rigenia Lab, pronto da pubblicare online
e da installare sul telefono come una vera app.

Non serve essere programmatori: segui i passi qui sotto nell'ordine.

---

## Cosa c'è qui dentro

- `src/RigeniaLab.jsx` — il cuore dell'app (tutto quello che abbiamo costruito)
- `src/main.jsx`, `src/index.css`, `index.html` — i file che la fanno partire
- `vite.config.js` — la configurazione che la rende installabile (PWA)
- `public/` — le icone dell'app (generate dal tuo logo)
- `package.json` — l'elenco degli ingredienti tecnici

---

## Come funziona, in due parole

L'app è scritta in un linguaggio che il browser non legge direttamente: prima va
"compilata" (un passaggio automatico che trasforma il progetto in pagine web pronte).
Poi i file risultanti vanno messi online. Lo faremo con strumenti gratuiti.

Hai due strade: la **A è la più semplice** (consigliata) e non richiede di installare
nulla sul computer. La **B** è per chi preferisce fare tutto da PC.

---

## STRADA A — La più semplice: Netlify Drop (nessuna installazione)

Con questa strada usi un sito gratuito che compila e pubblica per te.
Però Netlify Drop accetta progetti "già compilati". Per compilarlo senza installare
nulla, usiamo un servizio online gratuito chiamato **StackBlitz**.

### Passo 1 — Apri il progetto online
1. Vai su https://stackblitz.com e crea un account gratuito.
2. Clicca "Create" → scegli un progetto **Vite + React**.
3. Cancella i file di esempio e trascina dentro **tutti i file di questa cartella**
   (mantenendo le sottocartelle `src` e `public`).
   In alternativa: usa il pulsante "Upload" e carica l'intera cartella.

### Passo 2 — Compila
1. In StackBlitz apri il terminale (in basso) e scrivi:
   ```
   npm install
   npm run build
   ```
2. Al termine comparirà una cartella **`dist`**: è la tua app compilata.
3. Scarica la cartella `dist` (tasto destro → Download).

### Passo 3 — Pubblica
1. Vai su https://app.netlify.com/drop
2. Trascina la cartella **`dist`** nella pagina.
3. In pochi secondi avrai un indirizzo tipo `https://nome-a-caso.netlify.app`.
   **Quello è il link della tua app.** Puoi personalizzare il nome dalle impostazioni.

---

## STRADA B — Da computer (se hai dimestichezza)

Richiede Node.js installato (https://nodejs.org, versione LTS).

```bash
# 1. entra nella cartella del progetto
cd rigenia-lab

# 2. installa gli ingredienti (una volta sola)
npm install

# 3. per provarla sul tuo computer durante lo sviluppo
npm run dev
#    → apri l'indirizzo che compare (es. http://localhost:5173)

# 4. per creare la versione finale da pubblicare
npm run build
#    → crea la cartella "dist"
```

Poi pubblica la cartella `dist` con uno di questi (tutti hanno un piano gratuito):
- **Netlify**: trascina `dist` su https://app.netlify.com/drop
- **Vercel**: https://vercel.com (collega la cartella o un repository GitHub)
- **GitHub Pages**, **Cloudflare Pages**, ecc.

Se colleghi Netlify o Vercel a un repository GitHub, useranno in automatico
il file `netlify.toml` già incluso e ricompileranno a ogni modifica.

---

## Installare l'app sul telefono (la parte "magica")

Una volta che hai il link (es. `https://rigenia-lab.netlify.app`):

### Su Android (Chrome)
1. Apri il link nel browser.
2. Menu (tre puntini) → **"Installa app"** o **"Aggiungi a schermata Home"**.
3. L'icona Rigenia Lab comparirà tra le tue app. Aprila: parte a tutto schermo.

### Su iPhone (Safari)
1. Apri il link in **Safari** (importante: non Chrome).
2. Tocca il pulsante Condividi (il quadrato con la freccia).
3. Scorri e tocca **"Aggiungi a Home"**.
4. L'icona comparirà sulla home. Aprila: parte a tutto schermo.

Da quel momento i dati che inserisci **restano salvati** su quel dispositivo,
anche chiudendo l'app.

---

## Cose importanti da sapere

- **I dati sono salvati su questo dispositivo.** Ogni inserimento si salva da solo.
  Le foto vengono compresse in automatico per occupare poco spazio.

- **Fai un backup ogni tanto.** Nella scheda "Attività" → "Backup e dati" →
  "Esporta backup". Scarica un file con tutto il tuo archivio: tienilo al sicuro.
  Se cambi telefono o passi al cloud, userai "Importa backup" per ritrovare tutto.

- **Aggiornamenti futuri.** Quando vorrai modificare l'app, si cambia il file
  `src/RigeniaLab.jsx`, si ricompila (`npm run build`) e si ripubblica la nuova
  cartella `dist`. Chi ha già l'app installata la vedrà aggiornarsi da sola.

- **Verso il cloud (più dispositivi / collaboratori).** Quando sarà il momento,
  il file di backup esportato è il ponte: si crea un database online
  (es. Supabase, piano gratuito) e si importano i dati. Niente va perso.

Buon lavoro!
