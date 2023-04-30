PGDMP         )    
            {            postgres    15.2    15.2 N               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3458                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    5            �            1259    24610 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.categories;
       public         heap    postgres    false    5            �            1259    24609    categories_id_seq    SEQUENCE     �   ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220    5            �            1259    24617    cities    TABLE     �   CREATE TABLE public.cities (
    id integer NOT NULL,
    picture character varying(255),
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.cities;
       public         heap    postgres    false    5            �            1259    24616    cities_id_seq    SEQUENCE     �   ALTER TABLE public.cities ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222    5            �            1259    24635    eventCategories    TABLE     �   CREATE TABLE public."eventCategories" (
    id integer NOT NULL,
    "eventId" integer,
    "categoryId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 %   DROP TABLE public."eventCategories";
       public         heap    postgres    false    5            �            1259    24634    eventCategories_id_seq    SEQUENCE     �   ALTER TABLE public."eventCategories" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."eventCategories_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226    5            �            1259    24626    events    TABLE     ;  CREATE TABLE public.events (
    id integer NOT NULL,
    picture character varying(255),
    title character varying(255),
    date date,
    "cityId" integer,
    descriptions text,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone,
    "createdBy" integer
);
    DROP TABLE public.events;
       public         heap    postgres    false    5            �            1259    24625    events_id_seq    SEQUENCE     �   ALTER TABLE public.events ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    5    224            �            1259    24696    forgotRequest    TABLE     �   CREATE TABLE public."forgotRequest" (
    id integer NOT NULL,
    email character varying(255),
    code character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 #   DROP TABLE public."forgotRequest";
       public         heap    postgres    false    5            �            1259    24695    forgotRequest_id_seq    SEQUENCE     �   ALTER TABLE public."forgotRequest" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."forgotRequest_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    242    5            �            1259    24642    partners    TABLE     �   CREATE TABLE public.partners (
    id integer NOT NULL,
    picture character varying(255),
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.partners;
       public         heap    postgres    false    5            �            1259    24641    partners_id_seq    SEQUENCE     �   ALTER TABLE public.partners ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.partners_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228    5            �            1259    24667    paymentMethods    TABLE     �   CREATE TABLE public."paymentMethods" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 $   DROP TABLE public."paymentMethods";
       public         heap    postgres    false    5            �            1259    24666    paymentMethods_id_seq    SEQUENCE     �   ALTER TABLE public."paymentMethods" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."paymentMethods_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    234    5            �            1259    24601    profile    TABLE     �  CREATE TABLE public.profile (
    id integer NOT NULL,
    picture character varying(255),
    "fullName" character varying(255),
    "phoneNumber" character varying(255),
    gender boolean,
    profession character varying(255),
    nasionality character varying(255),
    "birthDate" date,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone,
    "userId" integer
);
    DROP TABLE public.profile;
       public         heap    postgres    false    5            �            1259    24600    profile_id_seq    SEQUENCE     �   ALTER TABLE public.profile ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.profile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218    5            �            1259    24651    reservationSections    TABLE     �   CREATE TABLE public."reservationSections" (
    id integer NOT NULL,
    name character varying(255),
    price character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 )   DROP TABLE public."reservationSections";
       public         heap    postgres    false    5            �            1259    24650    reservationSections_id_seq    SEQUENCE     �   ALTER TABLE public."reservationSections" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationSections_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    5    230            �            1259    24660    reservationStatus    TABLE     �   CREATE TABLE public."reservationStatus" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 '   DROP TABLE public."reservationStatus";
       public         heap    postgres    false    5            �            1259    24659    reservationStatus_id_seq    SEQUENCE     �   ALTER TABLE public."reservationStatus" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationStatus_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    232    5            �            1259    24681    reservationTickets    TABLE     �   CREATE TABLE public."reservationTickets" (
    id integer NOT NULL,
    "reservationId" integer,
    "sectionId" integer,
    quantity integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 (   DROP TABLE public."reservationTickets";
       public         heap    postgres    false    5            �            1259    24680    reservationTickets_id_seq    SEQUENCE     �   ALTER TABLE public."reservationTickets" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationTickets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    238    5            �            1259    24674    reservations    TABLE     
  CREATE TABLE public.reservations (
    id integer NOT NULL,
    "eventId" integer,
    "userId" integer,
    "statusId" integer,
    "paymentMethodId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
     DROP TABLE public.reservations;
       public         heap    postgres    false    5            �            1259    24673    reservations_id_seq    SEQUENCE     �   ALTER TABLE public.reservations ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reservations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    5    236            �            1259    24590    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    5            �            1259    24589    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216    5            �            1259    24688 	   wishlists    TABLE     �   CREATE TABLE public.wishlists (
    id integer NOT NULL,
    "eventId" integer,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.wishlists;
       public         heap    postgres    false    5            �            1259    24687    wishlists_id_seq    SEQUENCE     �   ALTER TABLE public.wishlists ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.wishlists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    240    5            f          0    24610 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �\       h          0    24617    cities 
   TABLE DATA           M   COPY public.cities (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �]       l          0    24635    eventCategories 
   TABLE DATA           b   COPY public."eventCategories" (id, "eventId", "categoryId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �^       j          0    24626    events 
   TABLE DATA           y   COPY public.events (id, picture, title, date, "cityId", descriptions, "createdAt", "updatedAt", "createdBy") FROM stdin;
    public          postgres    false    224   _       |          0    24696    forgotRequest 
   TABLE DATA           T   COPY public."forgotRequest" (id, email, code, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    242   d`       n          0    24642    partners 
   TABLE DATA           O   COPY public.partners (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �`       t          0    24667    paymentMethods 
   TABLE DATA           N   COPY public."paymentMethods" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    234   a       d          0    24601    profile 
   TABLE DATA           �   COPY public.profile (id, picture, "fullName", "phoneNumber", gender, profession, nasionality, "birthDate", "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    218   }a       p          0    24651    reservationSections 
   TABLE DATA           Z   COPY public."reservationSections" (id, name, price, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   c       r          0    24660    reservationStatus 
   TABLE DATA           Q   COPY public."reservationStatus" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    232   gc       x          0    24681    reservationTickets 
   TABLE DATA           t   COPY public."reservationTickets" (id, "reservationId", "sectionId", quantity, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    238   �c       v          0    24674    reservations 
   TABLE DATA           x   COPY public.reservations (id, "eventId", "userId", "statusId", "paymentMethodId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    236   -d       b          0    24590    users 
   TABLE DATA           X   COPY public.users (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �d       z          0    24688 	   wishlists 
   TABLE DATA           V   COPY public.wishlists (id, "eventId", "userId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    240   �g       �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 13, true);
          public          postgres    false    219            �           0    0    cities_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cities_id_seq', 10, true);
          public          postgres    false    221            �           0    0    eventCategories_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."eventCategories_id_seq"', 7, true);
          public          postgres    false    225            �           0    0    events_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.events_id_seq', 10, true);
          public          postgres    false    223            �           0    0    forgotRequest_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."forgotRequest_id_seq"', 3, true);
          public          postgres    false    241            �           0    0    partners_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.partners_id_seq', 3, true);
          public          postgres    false    227            �           0    0    paymentMethods_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."paymentMethods_id_seq"', 3, true);
          public          postgres    false    233            �           0    0    profile_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.profile_id_seq', 11, true);
          public          postgres    false    217            �           0    0    reservationSections_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."reservationSections_id_seq"', 3, true);
          public          postgres    false    229            �           0    0    reservationStatus_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."reservationStatus_id_seq"', 5, true);
          public          postgres    false    231            �           0    0    reservationTickets_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."reservationTickets_id_seq"', 3, true);
          public          postgres    false    237            �           0    0    reservations_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.reservations_id_seq', 3, true);
          public          postgres    false    235            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 24, true);
          public          postgres    false    215            �           0    0    wishlists_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.wishlists_id_seq', 4, true);
          public          postgres    false    239            �           2606    24615    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    220            �           2606    24624    cities cities_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pkey;
       public            postgres    false    222            �           2606    24640 $   eventCategories eventCategories_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."eventCategories"
    ADD CONSTRAINT "eventCategories_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."eventCategories" DROP CONSTRAINT "eventCategories_pkey";
       public            postgres    false    226            �           2606    24633    events events_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.events DROP CONSTRAINT events_pkey;
       public            postgres    false    224            �           2606    24703     forgotRequest forgotRequest_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."forgotRequest"
    ADD CONSTRAINT "forgotRequest_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."forgotRequest" DROP CONSTRAINT "forgotRequest_pkey";
       public            postgres    false    242            �           2606    24649    partners partners_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.partners DROP CONSTRAINT partners_pkey;
       public            postgres    false    228            �           2606    24672 "   paymentMethods paymentMethods_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."paymentMethods"
    ADD CONSTRAINT "paymentMethods_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."paymentMethods" DROP CONSTRAINT "paymentMethods_pkey";
       public            postgres    false    234            �           2606    24608    profile profile_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.profile DROP CONSTRAINT profile_pkey;
       public            postgres    false    218            �           2606    24658 ,   reservationSections reservationSections_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."reservationSections"
    ADD CONSTRAINT "reservationSections_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."reservationSections" DROP CONSTRAINT "reservationSections_pkey";
       public            postgres    false    230            �           2606    24665 (   reservationStatus reservationStatus_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."reservationStatus"
    ADD CONSTRAINT "reservationStatus_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."reservationStatus" DROP CONSTRAINT "reservationStatus_pkey";
       public            postgres    false    232            �           2606    24686 *   reservationTickets reservationTickets_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."reservationTickets"
    ADD CONSTRAINT "reservationTickets_pkey" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public."reservationTickets" DROP CONSTRAINT "reservationTickets_pkey";
       public            postgres    false    238            �           2606    24679    reservations reservations_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.reservations DROP CONSTRAINT reservations_pkey;
       public            postgres    false    236            �           2606    24599    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    24597    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    24693    wishlists wishlists_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.wishlists DROP CONSTRAINT wishlists_pkey;
       public            postgres    false    240            f   �   x�mλ�0����� Mϥ�������Q�ƒ|~�1��%�o���ixu M\i�PJ��&�W��Y��P��y�|+���#��Ҕ?�\���ʠ�5-5�c��>��Ұ2F�z��1��G��Xa�+#h���k�����p��k�icPX�uΙ��(�7�k>3      h   �   x�e�=N�@���>�/�����vPR�P!�YAI�"(�=^'d��}�W:�@e�,���O���G��7 ����j�m�{��$�������鮤��a&Ҥ�2��Y��q��f	�"Q��1�Q��0�yv�����/�������X\Y 
��ۛ������X��cv��=��qͼ �`�8�AX�01\��X��O��N�u��nS��߮�Y�      l   �   x�m���@���
7`A�UD*p�u�뗁�KH208��d'��=C���p}��B���+��n�ū��	�R)�� ^F��{��
�"5�q����8�	��4�$�\N`�k�4��p��x8.�      j   D  x�͓�n� Fg������c����R�,�}�"��5�y��ԭ2y����;�	dhVV;�B(>�3{��}8G&�,BP1�Ŕw��)�����Br�$Zvzɫ(�ȕ*��7�q/��^���dz�nj�jT���Y񖱧1D����HM���e��L�).tc?�}�f�� �5�&J�M�'�����H] �%c��)�}h}�%$X��G��_4�МCMￖ���Hw}��%�Ѩ�?��m�W���_����:���m˪�+W+�u�4��_m�K��n�M-D�`\�\�Ql@�O쪁v\Z#�^�xQ?��_�      |      x������ � �      n   v   x�e�;
AEѸ{��)�կ?�f�`#����4(��=\$DE+�͜�s:�����Eg�6!:��PT~�i9f���u���I�R���+��ly�@�`�Zw��`��r�/�-%n      t   f   x�e�;
�0�zs�\��o7M�`'�&���bea?��x��&aц}o�3k��b�z��LFi({�P��}���!�ԟk�.ۗ��C�\L ���3�<�Z4      d   z  x����j1��������?�w�^5	�t)!�7N2��ҵ�wB_��L�Bi�dGߑdd�[�M5��]�SڷCH�f������q��K~*y<� 􀁡B=(3��"��$�r����r��Mً�1eq?�:<zd�l��X^��̶�<��R�� �Gm������c��.��p� m�^)������<�u^_��YKB�hL�(-*ew฻TkUI� ,<��_��h��І�����Z�Irp�z����OS�@����,�eܴ�	Hi2&�/�*�,>�9��  jmڌ��]O�����o7��}/ݜ�)^���^���/��rP��y:��4�4���Q\w�u��i5�9����F�ʭ��I��o,�è      p   P   x�E�+�0@�{
Dm��?H��!Q�����=B�~P� �Z�W�E��i�y��Ѽ�h���c,��J�4`��/���/�      r   `   x�]�1� й��@~��f1,�89p�s(��o~J�����-�l�34#9�I�N��Q{i���M����!A9�'4�V�)da���J�c��      x   F   x�5ʱ� �ڞ�@�����?GB]{aa2Aud�lDiW���²�����ȂJ��ɻ�p�:      v   Z   x�=ʹ�0C�Z��� );�����DM �ţѸL_E�윍wS�X�p�~\&���ĜWj^f�(���~�����uP%�p��L�      b   7  x���I��J�����cWݚcDE�8+���C�&U&P@)��֋���<�͹��s�˓��.� ���	`��[Ȃcc��c�G8�q�W$s���D����/�W�Ť�M���_PadI��˜k����4�����T�{�'�A� ]V��fQ3O[ CL�B��:�
O6(y~�5z�(J�����a0�G�T�=����N����@=�Lr��0M����K��Z�#u�[11�f�K�$��^P jȐ/�*2�A	����o�"LZ��o�PGT��Ba#�Gre@+��(�{��o!�Qʞ=s�,�0��~ގ`��*�Y�ҲK�D��qw^�O�10㍓d1H��=X3?a���	?3����T���2hYX)l�<��v(u�$-��@�bby\�2���J�W������]=+����a��9n���I�w)���2}���f�~kr���e9���O�8�L���w�bv�wn�,.Λ�%;�ϗB��N�I�>D%ա�P��A)�����QE�a�0�����Ⱦ����ٍ<aᵸn߶.Zp�����
f����A7�-؋��,�܋���w�LeR<R i�T�'�WL�؏�N�8מ�#K]�3���iM��mq6_}yO�~��X˂�|%`w;>�.��<�dI?8J����uD�$5�$�ݳ"�}�����ڛӏ3�2��%3�gR�J;��󵔋��z���ssp=�&k���
���P�̆@O�ia��
?LuԌ��햫�n��j���udpDm��v4����WӨ�G�d.̚�1�!JvR�q�L���Tr��L�����F�V�	b��      z   Q   x�mʱ� ��py�T���?G�U�\}F dj���f����t�������>n��K���BH$��MG���*�     