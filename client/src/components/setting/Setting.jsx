import React, { useState } from "react";
import "./Setting.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Setting = () => {
  const [expanded, setExpanded] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name: ${name}, email: ${email}`);
  };

  return (
    <div className="setting">
      <div className="setting-title">Ustawienia Konta</div>
      <div className="setting-container">
        <div className="setting-sub-title">Dane Kontaktowe</div>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Dane Kontaktowe
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                E-mail, Adres, Telefon
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form onSubmit={handleSubmit}>
                  <p>Email</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Imię i Nazwisko</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Adres Dostawy</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Kod Pocztowy</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Miasto</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Telefon</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <button type="submit">Zapisz Zmiany</button>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disabled
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Ulubione
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Twoje ulubione Piekarnie
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ulubione Piekarnie</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disabled
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Powiadomienia
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Zgody na otrzymywanie powiadomień o wysyłce, nowościach
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Powiadomienia</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Setting;
