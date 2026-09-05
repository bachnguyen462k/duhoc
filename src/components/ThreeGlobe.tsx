import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface CountryHub {
  id: string;
  name: string;
  flag: string;
  lat: number;
  lon: number;
  color: number;
  colorHex: string;
  tag: string;
  scholarshipInfo: string;
}

export interface ThreeGlobeProps {
  focusedCountry?: string;
}

export const ThreeGlobe: React.FC<ThreeGlobeProps> = ({ focusedCountry = 'japan' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const targetAngleRef = useRef<number | null>(null);
  const prevFocusedCountryRef = useRef<string | null>(null);

  useEffect(() => {
    // Only trigger transition if country changed from previous
    if (prevFocusedCountryRef.current !== null && prevFocusedCountryRef.current !== focusedCountry) {
      let baseAngle = 1.35;
      if (focusedCountry === 'japan') baseAngle = 0.85;
      else if (focusedCountry === 'korea') baseAngle = 1.05;
      else if (focusedCountry === 'taiwan') baseAngle = 1.20;
      else if (focusedCountry === 'vietnam') baseAngle = 1.35;
      targetAngleRef.current = baseAngle;
    }
    prevFocusedCountryRef.current = focusedCountry;
  }, [focusedCountry]);

  // Key East Asia corridor focus: Việt Nam, Đài Loan, Hàn Quốc, Nhật Bản (Du học & XKLĐ)
  const hubs: CountryHub[] = [
    {
      id: 'vietnam',
      name: 'Việt Nam',
      flag: '🇻🇳',
      lat: 21.0285,
      lon: 105.8542,
      color: 0xef4444, // Red / Gold hub
      colorHex: '#ef4444',
      tag: 'Hà Nội / TP.HCM',
      scholarshipInfo: 'Trung tâm đào tạo tiếng Nhật - Hàn - Trung & rèn luyện tay nghề phỏng vấn xuất cảnh trọn gói'
    },
    {
      id: 'japan',
      name: 'Nhật Bản',
      flag: '🇯🇵',
      lat: 35.6762,
      lon: 139.6503,
      color: 0x10b981, // Emerald Green
      colorHex: '#10b981',
      tag: 'Tokyo / Nagoya',
      scholarshipInfo: 'XKLĐ Tokutei Ginou 1 & 2 (lương 35-55 tr/tháng, bảo lãnh người thân) • Du học trường tiếng & ĐH MEXT'
    },
    {
      id: 'korea',
      name: 'Hàn Quốc',
      flag: '🇰🇷',
      lat: 37.5665,
      lon: 126.978,
      color: 0xf59e0b, // Amber Gold
      colorHex: '#f59e0b',
      tag: 'Seoul / Busan',
      scholarshipInfo: 'Visa Kỹ Sư E-7 & Lao động EPS E-9 (lương 40-65 tr/tháng) • Du học tiếng D-4-1 và Đại học D-2 học bổng GKS'
    },
    {
      id: 'taiwan',
      name: 'Đài Loan',
      flag: '🇹🇼',
      lat: 25.033,
      lon: 121.5654,
      color: 0x38bdf8, // Cyan Blue
      colorHex: '#38bdf8',
      tag: 'Đài Bắc / Tân Trúc',
      scholarshipInfo: 'XKLĐ công xưởng điện tử, cơ khí (lương 23-35 tr/tháng, xuất cảnh 1-2 tháng) • Du học hệ Tân Hướng Nam & Bán dẫn TSMC'
    }
  ];

  // Secondary points in Vietnam (TP. Hồ Chí Minh & Đà Nẵng) to show national reach
  const hcmc = { lat: 10.8231, lon: 106.6297 };
  const danang = { lat: 16.0544, lon: 108.2022 };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    
    // Adaptive camera placement for mobile vs desktop screens
    const updateCameraForViewport = (w: number) => {
      if (w < 640) {
        camera.position.set(0, 1.4, 9.8);
      } else if (w < 1024) {
        camera.position.set(0, 1.3, 8.8);
      } else {
        camera.position.set(0, 1.2, 8.2);
      }
    };
    updateCameraForViewport(width);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Dynamic Lighting based on Light/Dark mode
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x93c5fd : 0xe0f2fe,
      isDark ? 1.4 : 1.8
    );
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(
      isDark ? 0x38bdf8 : 0x0284c7,
      isDark ? 2.5 : 2.0
    );
    dirLight1.position.set(6, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(
      isDark ? 0x818cf8 : 0x3b82f6,
      1.5
    );
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    // Master Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GLOBE_RADIUS = 2.35;

    // Helper: Convert Lat/Lon to 3D Vector on Sphere
    function latLngToVector3(lat: number, lon: number, radius = GLOBE_RADIUS): THREE.Vector3 {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    }

    // 1. Generate Earth Texture (Procedural Continents on Canvas)
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Ocean Base
      ctx.fillStyle = isDark ? '#081734' : '#0d3268';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Parallels and Meridians (Lat/Lon subtle grid)
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(125, 211, 252, 0.2)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += canvas.width / 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += canvas.height / 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Convert lat/lon to canvas (x, y)
      const toCanvasCoords = (lat: number, lon: number) => {
        const x = ((lon + 180) / 360) * canvas.width;
        const y = ((90 - lat) / 180) * canvas.height;
        return { x, y };
      };

      // Draw continent landmass polygons with glowing borders
      ctx.fillStyle = isDark ? '#14315c' : '#1e4986';
      ctx.strokeStyle = isDark ? '#38bdf8' : '#60a5fa';
      ctx.lineWidth = 2;

      // Realistic Continental Polygons (Eurasia, East Asia, Americas, Africa, Australia)
      const continents: [number, number][][] = [
        // East Asia & Indochina (Vietnam, China, Korea, etc.)
        [
          [70, 70], [60, 140], [50, 140], [45, 130], [38, 128], [35, 129], [34, 126], // Korea
          [30, 122], [22, 114], [21, 106], [16, 108], [10, 107], [8, 104], // Vietnam S-shape
          [13, 100], [20, 95], [22, 90], [10, 78], [25, 68], [35, 50], [40, 30],
          [55, 30], [65, 40], [70, 70]
        ],
        // Japan Archipelago
        [
          [44, 144], [43, 142], [41, 140], [37, 141], [35, 140], [33, 136],
          [31, 130], [33, 131], [36, 137], [39, 140], [44, 144]
        ],
        // Taiwan Island
        [
          [25.3, 121.5], [24.8, 121.9], [22.0, 120.8], [22.6, 120.3], [24.5, 120.6], [25.3, 121.5]
        ],
        // Europe & West Eurasia
        [
          [70, 30], [60, 10], [55, -5], [45, -9], [36, -6], [37, 15], [30, 32],
          [40, 28], [45, 35], [55, 38], [60, 40], [70, 30]
        ],
        // Africa
        [
          [35, -5], [30, 32], [12, 45], [-5, 40], [-34, 20], [-34, 18],
          [-10, 12], [5, 2], [15, -17], [30, -10], [35, -5]
        ],
        // Australia
        [
          [-12, 130], [-15, 145], [-25, 152], [-38, 148], [-35, 116], [-20, 114], [-12, 130]
        ],
        // North America
        [
          [70, -165], [65, -140], [55, -130], [48, -124], [30, -118], [20, -105],
          [16, -92], [25, -80], [35, -75], [45, -60], [60, -65], [70, -100], [70, -165]
        ],
        // South America
        [
          [10, -75], [5, -52], [-5, -35], [-22, -41], [-54, -68], [-40, -73],
          [-18, -70], [-5, -80], [8, -77], [10, -75]
        ]
      ];

      continents.forEach((poly) => {
        ctx.beginPath();
        poly.forEach((pt, i) => {
          const { x, y } = toCanvasCoords(pt[0], pt[1]);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // Add glowing gateway dots across all continents on Earth
      ctx.fillStyle = '#ffb95f';
      [
        // East Asia & Southeast Asia
        { lat: 21.0, lon: 105.8 }, // VN Hanoi
        { lat: 10.8, lon: 106.6 }, // VN HCMC
        { lat: 25.0, lon: 121.5 }, // Taiwan
        { lat: 37.5, lon: 126.9 }, // Korea
        { lat: 35.7, lon: 139.7 }, // Japan
        { lat: 1.35, lon: 103.8 }, // Singapore
        // Europe & Middle East & Africa
        { lat: 51.5, lon: -0.1 },  // London
        { lat: 50.1, lon: 8.7 },   // Frankfurt
        { lat: 48.9, lon: 2.4 },   // Paris
        { lat: 25.2, lon: 55.3 },  // Dubai
        { lat: 30.0, lon: 31.2 },  // Cairo
        { lat: -26.2, lon: 28.0 }, // Johannesburg
        // Americas & Oceania
        { lat: 40.7, lon: -74.0 }, // New York
        { lat: 34.0, lon: -118.2 },// Los Angeles
        { lat: 49.3, lon: -123.1 },// Vancouver
        { lat: -23.5, lon: -46.6 },// São Paulo
        { lat: -33.9, lon: 151.2 } // Sydney
      ].forEach((p) => {
        const { x, y } = toCanvasCoords(p.lat, p.lon);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    const earthTexture = new THREE.CanvasTexture(canvas);
    earthTexture.wrapS = THREE.RepeatWrapping;
    earthTexture.wrapT = THREE.ClampToEdgeWrapping;

    // 2. Earth Sphere Mesh
    const sphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specular: isDark ? 0x38bdf8 : 0x0284c7,
      shininess: 35,
      transparent: true,
      opacity: 0.95
    });
    const earthMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(earthMesh);

    // 3. Glowing Atmosphere Halo Mesh
    const haloGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.025, 48, 48);
    const haloMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.18 : 0.25
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // 4. Dot Cloud on Earth Landmasses (Evenly distributed across all continents)
    const dotCount = 650;
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotCount * 3);
    const dotColors = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      // Evenly distribute academic points across all 5 major world regions
      const u = Math.random();
      let lat = 0;
      let lon = 0;

      if (u < 0.25) {
        // Asia & Southeast Asia
        lat = 5 + Math.random() * 50;
        lon = 75 + Math.random() * 75;
      } else if (u < 0.50) {
        // Europe, Middle East & Africa
        lat = -30 + Math.random() * 85;
        lon = -15 + Math.random() * 75;
      } else if (u < 0.75) {
        // Americas (North, Central & South America)
        lat = -45 + Math.random() * 105;
        lon = -130 + Math.random() * 95;
      } else {
        // Oceania, Pacific & Global Oceans
        lat = (Math.random() - 0.5) * 110;
        lon = (Math.random() - 0.5) * 360;
      }

      const vec = latLngToVector3(lat, lon, GLOBE_RADIUS + 0.02);
      dotPositions[i * 3] = vec.x;
      dotPositions[i * 3 + 1] = vec.y;
      dotPositions[i * 3 + 2] = vec.z;

      if (i % 6 === 0) {
        // Amber/Gold dots
        dotColors[i * 3] = 0.98;
        dotColors[i * 3 + 1] = 0.72;
        dotColors[i * 3 + 2] = 0.2;
      } else {
        // Electric Cyan/Cobalt
        dotColors[i * 3] = isDark ? 0.22 : 0.05;
        dotColors[i * 3 + 1] = isDark ? 0.75 : 0.52;
        dotColors[i * 3 + 2] = 0.98;
      }
    }

    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute('color', new THREE.BufferAttribute(dotColors, 3));

    const dotMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    const dotCloud = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dotCloud);

    // 5. Connect Việt Nam, Đài Loan, Hàn Quốc, Nhật Bản with Flight Arcs & Global Orbits
    interface FlightRoute {
      curve: THREE.Curve<THREE.Vector3>;
      mesh: THREE.Line;
      airplane: THREE.Group;
      speed: number;
      offset: number;
    }

    const routes: FlightRoute[] = [];

    // Helper: Build a realistic civil aviation passenger airliner (Boeing / Airbus style)
    function createAirplaneMesh(colorHex: number): THREE.Group {
      const plane = new THREE.Group();

      // Materials
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.22,
        metalness: 0.12
      });

      const liveryMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.28,
        metalness: 0.18,
        emissive: colorHex,
        emissiveIntensity: 0.2
      });

      const cockpitMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.08,
        metalness: 0.85
      });

      const engineMetalMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.45,
        metalness: 0.75
      });

      // 1. Fuselage Main Cabin (Cylindrical tube)
      const cabinGeo = new THREE.CylinderGeometry(0.034, 0.034, 0.25, 18);
      cabinGeo.rotateX(Math.PI / 2); // Axis lies along Z
      const cabin = new THREE.Mesh(cabinGeo, bodyMat);
      cabin.position.set(0, 0, 0.02);
      plane.add(cabin);

      // 2. Aerodynamic Nose Dome (Smooth curved airliner nose, NOT a pointy rocket cone)
      const noseGeo = new THREE.SphereGeometry(0.034, 18, 14);
      const nose = new THREE.Mesh(noseGeo, bodyMat);
      nose.scale.set(1.0, 0.92, 1.75);
      nose.position.set(0, 0, 0.145);
      plane.add(nose);

      // 3. Cockpit Windshield Visor (Kính chắn gió buồng lái)
      const cockpitGeo = new THREE.BoxGeometry(0.042, 0.013, 0.032);
      cockpitGeo.rotateX(-0.22);
      const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
      cockpit.position.set(0, 0.021, 0.168);
      plane.add(cockpit);

      // 4. Tapered Tail Fuselage (Vuốt thon nhẹ lên trên)
      const tailConeGeo = new THREE.CylinderGeometry(0.034, 0.008, 0.18, 18);
      tailConeGeo.rotateX(Math.PI / 2);
      const tailCone = new THREE.Mesh(tailConeGeo, bodyMat);
      tailCone.position.set(0, 0.008, -0.19);
      plane.add(tailCone);

      // 5. Swept-Back Main Wings (Đôi cánh dài vát chéo xuôi khí động học)
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 0.075);            // Center leading root
      wingShape.lineTo(0.28, -0.065);        // Starboard wingtip leading edge
      wingShape.lineTo(0.27, -0.105);        // Starboard wingtip trailing edge
      wingShape.lineTo(0.035, -0.045);       // Starboard trailing root
      wingShape.lineTo(-0.035, -0.045);      // Port trailing root
      wingShape.lineTo(-0.27, -0.105);       // Port wingtip trailing edge
      wingShape.lineTo(-0.28, -0.065);       // Port wingtip leading edge
      wingShape.closePath();

      const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.008, bevelEnabled: false });
      wingGeo.rotateX(-Math.PI / 2); // Lay flat on X-Z plane
      const wings = new THREE.Mesh(wingGeo, bodyMat);
      wings.position.set(0, -0.006, 0);
      plane.add(wings);

      // 6. Winglets on Wingtips (Cánh dựng đứng ở 2 đầu mút cánh)
      const wingletGeo = new THREE.BoxGeometry(0.005, 0.034, 0.028);
      const leftWinglet = new THREE.Mesh(wingletGeo, liveryMat);
      leftWinglet.position.set(-0.275, 0.016, -0.088);
      plane.add(leftWinglet);

      const rightWinglet = new THREE.Mesh(wingletGeo, liveryMat);
      rightWinglet.position.set(0.275, 0.016, -0.088);
      plane.add(rightWinglet);

      // 7. Twin Underwing Turbofan Jet Engines (2 Động cơ phản lực treo dưới 2 cánh)
      const engineNacelleGeo = new THREE.CylinderGeometry(0.018, 0.016, 0.085, 16);
      engineNacelleGeo.rotateX(Math.PI / 2);
      const fanInletGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.008, 16);
      fanInletGeo.rotateX(Math.PI / 2);
      const pylonGeo = new THREE.BoxGeometry(0.006, 0.022, 0.045);

      // Left Jet Engine
      const leftEngine = new THREE.Group();
      leftEngine.add(new THREE.Mesh(engineNacelleGeo, bodyMat));
      const leftFan = new THREE.Mesh(fanInletGeo, engineMetalMat);
      leftFan.position.set(0, 0, 0.042);
      leftEngine.add(leftFan);
      const leftPylon = new THREE.Mesh(pylonGeo, bodyMat);
      leftPylon.position.set(0, 0.017, 0.01);
      leftEngine.add(leftPylon);
      leftEngine.position.set(-0.11, -0.03, 0.015);
      plane.add(leftEngine);

      // Right Jet Engine
      const rightEngine = new THREE.Group();
      rightEngine.add(new THREE.Mesh(engineNacelleGeo, bodyMat));
      const rightFan = new THREE.Mesh(fanInletGeo, engineMetalMat);
      rightFan.position.set(0, 0, 0.042);
      rightEngine.add(rightFan);
      const rightPylon = new THREE.Mesh(pylonGeo, bodyMat);
      rightPylon.position.set(0, 0.017, 0.01);
      rightEngine.add(rightPylon);
      rightEngine.position.set(0.11, -0.03, 0.015);
      plane.add(rightEngine);

      // 8. Tail Vertical Fin (Đuôi đứng vát nghiêng mang màu nhận diện hãng)
      const finShape = new THREE.Shape();
      finShape.moveTo(0, -0.13);        // Base leading edge
      finShape.lineTo(0.11, -0.24);      // Fin top leading edge
      finShape.lineTo(0.11, -0.28);      // Fin top trailing edge
      finShape.lineTo(0, -0.26);         // Base trailing edge
      finShape.closePath();

      const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.007, bevelEnabled: false });
      finGeo.rotateY(Math.PI / 2); // Stand upright along Y-Z plane
      const tailFin = new THREE.Mesh(finGeo, liveryMat);
      tailFin.position.set(0.0035, 0.024, 0);
      plane.add(tailFin);

      // 9. Horizontal Stabilizers (Cánh đuôi ngang)
      const tailWingShape = new THREE.Shape();
      tailWingShape.moveTo(0, -0.21);
      tailWingShape.lineTo(0.11, -0.27);
      tailWingShape.lineTo(0.10, -0.295);
      tailWingShape.lineTo(0.02, -0.27);
      tailWingShape.lineTo(-0.02, -0.27);
      tailWingShape.lineTo(-0.10, -0.295);
      tailWingShape.lineTo(-0.11, -0.27);
      tailWingShape.closePath();

      const tailWingGeo = new THREE.ExtrudeGeometry(tailWingShape, { depth: 0.004, bevelEnabled: false });
      tailWingGeo.rotateX(-Math.PI / 2);
      const tailWings = new THREE.Mesh(tailWingGeo, bodyMat);
      tailWings.position.set(0, 0.02, 0);
      plane.add(tailWings);

      // 10. International Aviation Navigation Lights (ICAO Standard)
      // Port (Left) Wingtip: RED light
      const redLight = new THREE.Mesh(
        new THREE.SphereGeometry(0.01, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      redLight.position.set(-0.28, 0.006, -0.09);
      plane.add(redLight);

      // Starboard (Right) Wingtip: GREEN light
      const greenLight = new THREE.Mesh(
        new THREE.SphereGeometry(0.01, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x22c55e })
      );
      greenLight.position.set(0.28, 0.006, -0.09);
      plane.add(greenLight);

      // Tail Top Strobe Beacon: WHITE strobe
      const tailStrobe = new THREE.Mesh(
        new THREE.SphereGeometry(0.012, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      tailStrobe.position.set(0, 0.135, -0.27);
      plane.add(tailStrobe);

      // 11. Twin Jet Vapor Contrails (Vệt khí phản lực sinh động kéo dài sau 2 động cơ phản lực)
      const contrailMat = new THREE.LineBasicMaterial({
        color: isDark ? 0xcfedff : 0xffffff,
        transparent: true,
        opacity: isDark ? 0.6 : 0.8,
        linewidth: 2
      });
      const contrailGeoLeft = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.11, -0.03, -0.02),
        new THREE.Vector3(-0.115, -0.028, -0.22),
        new THREE.Vector3(-0.125, -0.024, -0.48),
        new THREE.Vector3(-0.14, -0.02, -0.72)
      ]);
      plane.add(new THREE.Line(contrailGeoLeft, contrailMat));

      const contrailGeoRight = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.11, -0.03, -0.02),
        new THREE.Vector3(0.115, -0.028, -0.22),
        new THREE.Vector3(0.125, -0.024, -0.48),
        new THREE.Vector3(0.14, -0.02, -0.72)
      ]);
      plane.add(new THREE.Line(contrailGeoRight, contrailMat));

      return plane;
    }

    // A. Full 360-Degree Global Circumnavigation Routes (Máy bay bay vòng quanh địa cầu)
    function createGlobalCircumnavigationRoute(
      radius: number,
      tiltEuler: THREE.Euler,
      colorHex: number,
      speed: number,
      planesCount = 2
    ) {
      const numPoints = 120;
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const pt = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        pt.applyEuler(tiltEuler);
        points.push(pt);
      }
      const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal');
      const curvePoints = curve.getPoints(120);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      const curveMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: isDark ? 0.45 : 0.6,
        linewidth: 1.5
      });
      const orbitMesh = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(orbitMesh);

      // Add modern civil passenger airliners cruising around this global flight path
      for (let i = 0; i < planesCount; i++) {
        const airplane = createAirplaneMesh(colorHex);
        globeGroup.add(airplane);

        routes.push({
          curve,
          mesh: orbitMesh,
          airplane,
          speed,
          offset: i / planesCount
        });
      }
    }

    // B. Arced Point-to-Point Flight Routes (Tuyến bay cất cánh từ các Hub toàn cầu)
    function createFlightArc(
      p1: { lat: number; lon: number },
      p2: { lat: number; lon: number },
      colorHex: number,
      arcHeight = 0.38,
      flightSpeed = 0.045,
      offset = Math.random()
    ) {
      const v1 = latLngToVector3(p1.lat, p1.lon, GLOBE_RADIUS);
      const v2 = latLngToVector3(p2.lat, p2.lon, GLOBE_RADIUS);
      const angle = v1.angleTo(v2);

      const numPoints = 48;
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        let pt: THREE.Vector3;
        if (angle < 0.001) {
          pt = v1.clone();
        } else {
          // Spherical linear interpolation (SLERP) across 3D spherical Earth
          const sinAngle = Math.sin(angle);
          const w1 = Math.sin((1 - t) * angle) / sinAngle;
          const w2 = Math.sin(t * angle) / sinAngle;
          pt = new THREE.Vector3(
            w1 * v1.x + w2 * v2.x,
            w1 * v1.y + w2 * v2.y,
            w1 * v1.z + w2 * v2.z
          );
        }
        // Parabolic arc height above spherical surface
        const altitude = GLOBE_RADIUS + Math.sin(t * Math.PI) * (arcHeight + angle * 0.08);
        pt.normalize().multiplyScalar(altitude);
        points.push(pt);
      }

      const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48));

      const curveMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: isDark ? 0.75 : 0.88,
        linewidth: 1.8
      });
      const arcMesh = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arcMesh);

      // 3D Airliner Mesh flying along the flight trajectory
      const airplane = createAirplaneMesh(colorHex);
      globeGroup.add(airplane);

      routes.push({
        curve,
        mesh: arcMesh,
        airplane,
        speed: flightSpeed,
        offset
      });
    }

    // World Aviation Hubs across all continents for balanced global distribution
    const gateways = {
      // East Asia & Southeast Asia
      hanoi: { lat: 21.0285, lon: 105.8542 },
      hcmc: { lat: 10.8231, lon: 106.6297 },
      danang: { lat: 16.0544, lon: 108.2022 },
      tokyo: { lat: 35.6762, lon: 139.6503 },
      seoul: { lat: 37.5665, lon: 126.9780 },
      taipei: { lat: 25.0330, lon: 121.5654 },
      singapore: { lat: 1.3521, lon: 103.8198 },

      // Europe
      london: { lat: 51.5074, lon: -0.1278 },
      frankfurt: { lat: 50.1109, lon: 8.6821 },
      paris: { lat: 48.8566, lon: 2.3522 },

      // North America
      newyork: { lat: 40.7128, lon: -74.0060 },
      losangeles: { lat: 34.0522, lon: -118.2437 },
      vancouver: { lat: 49.2827, lon: -123.1207 },

      // South America
      saopaulo: { lat: -23.5505, lon: -46.6333 },

      // Middle East & Africa
      dubai: { lat: 25.2048, lon: 55.2708 },
      cairo: { lat: 30.0444, lon: 31.2357 },
      johannesburg: { lat: -26.2041, lon: 28.0473 },

      // Oceania
      sydney: { lat: -33.8688, lon: 151.2093 }
    };

    // 1. GLOBAL 360-DEGREE PLANETARY ORBITS (Phân bố 8 máy bay tuần tra vòng quanh toàn cầu)
    // Orbit 1: Trans-Pacific & Atlantic Inclined Orbit
    createGlobalCircumnavigationRoute(
      GLOBE_RADIUS + 0.36,
      new THREE.Euler(0.42, 0.22, -0.18),
      0x38bdf8, // Sky Blue
      0.038,
      2         // 2 máy bay cách nhau 180 độ
    );

    // Orbit 2: Southern Hemisphere & Oceania / Africa Orbit
    createGlobalCircumnavigationRoute(
      GLOBE_RADIUS + 0.44,
      new THREE.Euler(-0.46, -0.32, 0.52),
      0x10b981, // Emerald Green
      0.035,
      2         // 2 máy bay cách nhau 180 độ
    );

    // Orbit 3: Trans-Polar High-Latitude Express
    createGlobalCircumnavigationRoute(
      GLOBE_RADIUS + 0.32,
      new THREE.Euler(0.72, 0.35, 0.12),
      0xf59e0b, // Amber Gold
      0.042,
      2         // 2 máy bay
    );

    // Orbit 4: Equatorial Global Orbit
    createGlobalCircumnavigationRoute(
      GLOBE_RADIUS + 0.40,
      new THREE.Euler(0.06, 0.15, -0.04),
      0x818cf8, // Indigo Blue
      0.036,
      2         // 2 máy bay
    );

    // 2. INTERCONTINENTAL FLIGHT ARCS (Chia đều máy bay khắp tất cả các lục địa và đại dương)
    // Pacific Ocean (Châu Á ➔ Bắc Mỹ)
    createFlightArc(gateways.tokyo, gateways.losangeles, 0x38bdf8, 0.42, 0.045, 0.15);
    createFlightArc(gateways.vancouver, gateways.tokyo, 0x06b6d4, 0.40, 0.044, 0.75);

    // Atlantic Ocean (Bắc Mỹ ➔ Châu Âu)
    createFlightArc(gateways.newyork, gateways.london, 0x10b981, 0.35, 0.048, 0.45);

    // Eurasia Corridor (Châu Âu ➔ Đông Á)
    createFlightArc(gateways.frankfurt, gateways.seoul, 0xf59e0b, 0.42, 0.040, 0.65);

    // Middle East & South Asia (Trung Đông ➔ Đông Nam Á)
    createFlightArc(gateways.dubai, gateways.hanoi, 0x06b6d4, 0.36, 0.046, 0.30);
    createFlightArc(gateways.paris, gateways.dubai, 0x818cf8, 0.32, 0.050, 0.60);

    // Americas North-South (Bắc Mỹ ➔ Nam Mỹ)
    createFlightArc(gateways.losangeles, gateways.saopaulo, 0xf87171, 0.44, 0.042, 0.20);

    // Africa Corridor (Châu Phi Bắc ➔ Nam)
    createFlightArc(gateways.cairo, gateways.johannesburg, 0xfbbf24, 0.38, 0.044, 0.55);

    // Oceania to Asia (Châu Đại Dương ➔ Châu Á)
    createFlightArc(gateways.sydney, gateways.singapore, 0x34d399, 0.36, 0.046, 0.80);

    // South Atlantic (Nam Mỹ ➔ Châu Phi)
    createFlightArc(gateways.saopaulo, gateways.johannesburg, 0x60a5fa, 0.40, 0.042, 0.38);

    // 3. EDUGLOBAL REGIONAL CORRIDORS (Việt Nam ➔ Nhật Bản, Hàn Quốc, Đài Loan)
    createFlightArc(gateways.hanoi, gateways.tokyo, 0x10b981, 0.35, 0.052, 0.10);  // Hà Nội ➔ Tokyo
    createFlightArc(gateways.hcmc, gateways.seoul, 0xf59e0b, 0.36, 0.050, 0.40);   // TP.HCM ➔ Seoul
    createFlightArc(gateways.danang, gateways.taipei, 0x38bdf8, 0.28, 0.056, 0.70); // Đà Nẵng ➔ Đài Bắc

    // Subtle Gateway Beacon Spheres for World Cities
    const secondaryGateways = [
      gateways.london,
      gateways.paris,
      gateways.frankfurt,
      gateways.newyork,
      gateways.losangeles,
      gateways.vancouver,
      gateways.saopaulo,
      gateways.dubai,
      gateways.cairo,
      gateways.johannesburg,
      gateways.sydney,
      gateways.singapore
    ];

    secondaryGateways.forEach((gw) => {
      const pos = latLngToVector3(gw.lat, gw.lon, GLOBE_RADIUS + 0.02);
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 10, 10),
        new THREE.MeshBasicMaterial({
          color: isDark ? 0x38bdf8 : 0x0284c7,
          transparent: true,
          opacity: 0.85
        })
      );
      beacon.position.copy(pos);
      globeGroup.add(beacon);
    });

    // 6. Hub Pins and Pulsing Ripple Rings for the 4 Countries
    interface PulsingRing {
      mesh: THREE.Mesh;
      baseScale: number;
      speed: number;
    }
    const pulsingRings: PulsingRing[] = [];

    hubs.forEach((hub) => {
      const pos = latLngToVector3(hub.lat, hub.lon, GLOBE_RADIUS + 0.04);

      // Pin core
      const pinGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: hub.color });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);

      // Inner glow beacon
      const glowGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const glowMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        transparent: true,
        opacity: 0.4
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.copy(pos);
      globeGroup.add(glow);

      // Concentric Pulsing Ring on surface
      const ringGeo = new THREE.RingGeometry(0.08, 0.16, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);

      pulsingRings.push({
        mesh: ring,
        baseScale: 1.0,
        speed: 2.2 + Math.random() * 0.8
      });
    });

    // Also add departure pins for HCMC & Da Nang
    const hcmcPos = latLngToVector3(hcmc.lat, hcmc.lon, GLOBE_RADIUS + 0.04);
    const hcmcPin = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    hcmcPin.position.copy(hcmcPos);
    globeGroup.add(hcmcPin);

    const danangPos = latLngToVector3(danang.lat, danang.lon, GLOBE_RADIUS + 0.04);
    const danangPin = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    danangPin.position.copy(danangPos);
    globeGroup.add(danangPin);

    // Initial Globe Orientation: Focus directly on East Asia (Vietnam, Taiwan, Korea, Japan)
    // Longitude ~115° to 125° facing forward
    globeGroup.rotation.y = 1.35; // Centers Vietnam, Taiwan, Korea, and Japan towards the camera
    globeGroup.rotation.x = 0.28; // Slight downward pitch for top-down perspective

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isUserDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4;

      if (isUserDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      isUserDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isUserDragging = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const clock = new THREE.Clock();

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth continuous auto-rotation & country focus unless user is dragging
      if (!isUserDragging) {
        // ALWAYS maintain continuous, elegant planetary spin
        globeGroup.rotation.y += 0.0016;

        // If user actively switched country, smoothly steer toward that angle
        if (targetAngleRef.current !== null) {
          const TWO_PI = Math.PI * 2;
          const currentWrapped = ((globeGroup.rotation.y % TWO_PI) + TWO_PI) % TWO_PI;
          const targetWrapped = ((targetAngleRef.current % TWO_PI) + TWO_PI) % TWO_PI;
          let diff = targetWrapped - currentWrapped;
          if (diff < -Math.PI) diff += TWO_PI;
          if (diff > Math.PI) diff -= TWO_PI;

          if (Math.abs(diff) > 0.01) {
            globeGroup.rotation.y += diff * 0.04;
          } else {
            targetAngleRef.current = null;
          }
        }

        targetX = mouseX * 0.3;
        targetY = mouseY * 0.3;
        globeGroup.rotation.x += (targetY + 0.28 - globeGroup.rotation.x) * 0.02;
      }

      // Animate Traveling 3D Airplanes along the connecting flight arcs
      routes.forEach((route) => {
        const progress = (elapsedTime * route.speed + route.offset) % 1;
        const pt = route.curve.getPointAt(progress);
        route.airplane.position.copy(pt);

        // Align airplane nose along the tangent of the flight curve
        const tangent = route.curve.getTangentAt(progress).normalize();
        const up = pt.clone().normalize();
        const matrix = new THREE.Matrix4();
        const right = new THREE.Vector3().crossVectors(up, tangent).normalize();
        const adjustedUp = new THREE.Vector3().crossVectors(tangent, right).normalize();
        matrix.makeBasis(right, adjustedUp, tangent);
        route.airplane.quaternion.setFromRotationMatrix(matrix);
      });

      // Animate Pulsing Rings around Vietnam, Taiwan, Korea, Japan
      pulsingRings.forEach((p, idx) => {
        const scale = 1 + Math.sin(elapsedTime * p.speed + idx) * 0.4;
        p.mesh.scale.set(scale, scale, 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      updateCameraForViewport(newW);
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto select-none touch-pan-y" id="threejs-globe-canvas">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
