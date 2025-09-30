<img width="2760" height="5176" alt="image" src="https://github.com/user-attachments/assets/203de3a8-9569-45f2-b12e-61581941ce07" />
# 90-Day Red Team & Bug Bounty Roadmap

A concise learning plan and toolkit for anyone aiming for a **Junior Red Team** role and active **Bugcrowd** hunting in 90 days.

---

## 🎯 Goal
Master key offensive security tools and workflows to:
- Land a **junior red team** position.
- Actively find and responsibly disclose bugs on **Bugcrowd**.

---

## 🗓️ 90-Day Timeline

### Days 1–30: Recon & Fundamentals
- **Tools:** Nmap, Amass, Subfinder, Aquatone  
- **Focus:** Asset discovery, service fingerprinting, automation.
- **Practice:**  
  - Scan a local lab network.  
  - Automate subdomain discovery with custom scripts.

### Days 31–60: Web App Testing
- **Tools:** Burp Suite, OWASP ZAP, SQLmap, ffuf  
- **Focus:** XSS, SQLi, IDOR, authentication flaws.  
- **Practice:**  
  - Complete [PortSwigger Web Security Academy](https://portswigger.net/web-security) labs.  
  - Fuzz parameters and automate scanning.

### Days 61–90: Exploitation & Cloud
- **Tools:** Metasploit, Responder, Mimikatz, AWS CLI + ScoutSuite, kube-hunter  
- **Focus:** Post-exploitation in a safe lab, cloud misconfigurations, Kubernetes basics.  
- **Practice:**  
  - Exploit intentionally vulnerable VMs (e.g., Metasploitable, DVWA).  
  - Audit a personal AWS free-tier account.

---

## 🛠️ Core Toolset

| Category | Tools |
|----------|------|
| **Recon** | Nmap, Amass, Subfinder, Aquatone |
| **Web Testing** | Burp Suite, OWASP ZAP, SQLmap, ffuf |
| **Exploitation** | Metasploit, Responder, Mimikatz |
| **Cloud / Containers** | AWS CLI, ScoutSuite, kubectl, kube-hunter |
| **Scripting & Automation** | Python 3, Bash, jq |

---

## 📚 Learning Resources
- [Hack The Box](https://www.hackthebox.com/) & [TryHackMe](https://tryhackme.com/) for labs.
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) for web-app practice.
- Bugcrowd University: [bugcrowd.com/hackers/bugcrowd-university](https://www.bugcrowd.com/hackers/bugcrowd-university/).

---

## ✅ Responsible Disclosure
All testing **must** be performed:
- On **your own lab environments** *or*
- On **programs that have given explicit permission** (e.g., Bugcrowd listed targets).

Never test without authorization.

---

## 🤝 Contributing
Have tips or improvements?  
Open an issue or submit a pull request!

---

*This repository is for educational purposes only. Follow all legal and ethical guidelines when performing security research.*

