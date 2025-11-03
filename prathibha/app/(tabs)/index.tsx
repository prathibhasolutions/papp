import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Floating Animation Component
const FloatingElement = ({ children, delay = 0, duration = 3000 }: { children: React.ReactNode; delay?: number; duration?: number }) => {
  const translateY = new Animated.Value(0);

  React.useEffect(() => {
    const animateFloat = () => {
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ]).start(() => animateFloat());
    };

    const timer = setTimeout(() => animateFloat(), delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
};

// Animated Card Component
const AnimatedBusinessCard = ({ business, index, router }: { business: any; index: number; router: any }) => {
  const scaleValue = new Animated.Value(1);
  const fadeInValue = new Animated.Value(0);
  const slideInValue = new Animated.Value(50);

  React.useEffect(() => {
    // Entrance animation with staggered delay
    const delay = index * 200;
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeInValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(slideInValue, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
  }, [index]);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{
      transform: [
        { scale: scaleValue },
        { translateY: slideInValue }
      ],
      opacity: fadeInValue
    }}>
      <TouchableOpacity
        style={styles.businessCard}
        onPress={() => router.push(business.screen as any)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <LinearGradient
          colors={business.gradient as [string, string]}
          style={styles.cardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Card Content */}
          <View style={styles.cardContent}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <View style={styles.logoBackground}>
                <Image
                  source={business.logo}
                  style={styles.businessLogo}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Text Section */}
            <View style={styles.cardTextSection}>
              <Text style={styles.businessName}>{business.name}</Text>
              <Text style={styles.businessDescription}>{business.description}</Text>
            </View>

            {/* Arrow Icon */}
            <View style={styles.arrowContainer}>
              <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.8)" />
            </View>
          </View>

          {/* Floating Icon */}
          <View style={styles.floatingIcon}>
            <Ionicons name={business.icon as any} size={24} color="rgba(255,255,255,0.3)" />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const BUSINESSES = [
  {
    name: 'Prathibha Institute',
    screen: '/institute',
    logo: require('../../assets/logos/prathibha_institute_logo.png'),
    gradient: ['#6366f1', '#8b5cf6'],
    description: 'Technical Education',
    icon: 'school-outline'
  },
  {
    name: 'Prathibha Solutions',
    screen: '/solutions',
    logo: require('../../assets/logos/prathibha_solutions_logo.png'),
    gradient: ['#10b981', '#059669'],
    description: 'Digital Solutions',
    icon: 'code-slash-outline'
  },
  {
    name: 'Prathibha Nursery',
    screen: '/nursery',
    logo: require('../../assets/logos/PrathibhaNursery.png'),
    gradient: ['#22c55e', '#16a34a'],
    description: 'Plants & Garden Care',
    icon: 'leaf-outline'
  },
  {
    name: 'Prathibha Services',
    screen: '/services',
    logo: require('../../assets/logos/prathibha_services_logo.png'),
    gradient: ['#FF6B35', '#FF8C42'],
    description: 'Home Services & Repairs',
    icon: 'construct-outline'
  },
];

// Shimmer Text Component
const ShimmerText = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const shimmerValue = new Animated.Value(0);

  React.useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerValue, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerAnimation.start();

    return () => shimmerAnimation.stop();
  }, []);

  const opacity = shimmerValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1, 0.8],
  });

  return (
    <Animated.Text style={[style, { opacity }]}>
      {children}
    </Animated.Text>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Gradient */}
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#334155']}
        style={styles.backgroundGradient}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <ShimmerText style={styles.brandName}>Prathibha</ShimmerText>
            <Text style={styles.tagline}>Excellence in Every Service</Text>
          </View>

          {/* Decorative Elements */}
          <View style={styles.decorativeContainer}>
            <FloatingElement delay={0} duration={4000}>
              <View style={[styles.decorativeCircle, styles.circle1]} />
            </FloatingElement>
            <FloatingElement delay={1000} duration={3500}>
              <View style={[styles.decorativeCircle, styles.circle2]} />
            </FloatingElement>
            <FloatingElement delay={500} duration={4500}>
              <View style={[styles.decorativeCircle, styles.circle3]} />
            </FloatingElement>
          </View>
        </View>

        {/* Business Cards Section */}
        <View style={styles.businessSection}>
          <Text style={styles.sectionTitle}>Our Businesses</Text>
          <Text style={styles.sectionSubtitle}>Choose a service to explore</Text>

          <View style={styles.grid}>
            {BUSINESSES.map((business, index) => (
              <AnimatedBusinessCard
                key={business.name}
                business={business}
                index={index}
                router={router}
              />
            ))}
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Trusted by thousands of customers across Telangana
          </Text>
          <View style={styles.statsContainer}>
            <FloatingElement delay={2000} duration={2000}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1000+</Text>
                <Text style={styles.statLabel}>Happy Customers</Text>
              </View>
            </FloatingElement>
            <View style={styles.statDivider} />
            <FloatingElement delay={2500} duration={2200}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>4+</Text>
                <Text style={styles.statLabel}>Business Verticals</Text>
              </View>
            </FloatingElement>
            <View style={styles.statDivider} />
            <FloatingElement delay={3000} duration={2400}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5+</Text>
                <Text style={styles.statLabel}>Years Experience</Text>
              </View>
            </FloatingElement>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  headerSection: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  welcomeText: {
    color: '#94a3b8',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
  },
  brandName: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    color: '#00ffcc',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  decorativeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.1,
  },
  circle1: {
    width: 100,
    height: 100,
    backgroundColor: '#00ffcc',
    top: 20,
    right: 30,
  },
  circle2: {
    width: 60,
    height: 60,
    backgroundColor: '#6366f1',
    top: 80,
    left: 20,
  },
  circle3: {
    width: 80,
    height: 80,
    backgroundColor: '#ff6b35',
    bottom: 20,
    right: 50,
  },
  businessSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#94a3b8',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  grid: {
    gap: 16,
  },
  businessCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  cardGradient: {
    padding: 20,
    minHeight: 120,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  logoContainer: {
    marginRight: 16,
  },
  logoBackground: {
    width: 75,
    height: 75,
    borderRadius: 37.5, // Perfect circle
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden', // Ensures logo stays within circular bounds
  },
  businessLogo: {
    width: 70, // Zoomed in - almost fills the container
    height: 70,
    borderRadius: 35, // Circular logo
  },
  cardTextSection: {
    flex: 1,
  },
  businessName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  businessDescription: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontWeight: '500',
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  footerSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#94a3b8',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 20,
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    color: '#00ffcc',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 20,
  },
});
