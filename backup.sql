PGDMP     -                    {            postgres    15.2    15.2 S    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3469                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
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
            public          postgres    false    5    220            �            1259    24617    cities    TABLE     �   CREATE TABLE public.cities (
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
            public          postgres    false    5    222            �            1259    24722    deviceToken    TABLE       CREATE TABLE public."deviceToken" (
    id integer NOT NULL,
    token character varying(255),
    "userId" integer,
    "eventCreationNotif" boolean DEFAULT true,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 !   DROP TABLE public."deviceToken";
       public         heap    postgres    false    5            �            1259    24721    deviceToken_id_seq    SEQUENCE     �   ALTER TABLE public."deviceToken" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."deviceToken_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    5    244            �            1259    24635    eventCategories    TABLE     �   CREATE TABLE public."eventCategories" (
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
            public          postgres    false    224    5            �            1259    24696    forgotRequest    TABLE     �   CREATE TABLE public."forgotRequest" (
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
            public          postgres    false    5    228            �            1259    24667    paymentMethods    TABLE     �   CREATE TABLE public."paymentMethods" (
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
            public          postgres    false    5    218            �            1259    24651    reservationSections    TABLE     �   CREATE TABLE public."reservationSections" (
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
            public          postgres    false    236    5            �            1259    24590    users    TABLE       CREATE TABLE public.users (
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
            public          postgres    false    240    5            o          0    24610 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   0c       q          0    24617    cities 
   TABLE DATA           M   COPY public.cities (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �c       �          0    24722    deviceToken 
   TABLE DATA           l   COPY public."deviceToken" (id, token, "userId", "eventCreationNotif", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    244   �d       u          0    24635    eventCategories 
   TABLE DATA           b   COPY public."eventCategories" (id, "eventId", "categoryId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �l       s          0    24626    events 
   TABLE DATA           y   COPY public.events (id, picture, title, date, "cityId", descriptions, "createdAt", "updatedAt", "createdBy") FROM stdin;
    public          postgres    false    224   �m       �          0    24696    forgotRequest 
   TABLE DATA           T   COPY public."forgotRequest" (id, email, code, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    242   
p       w          0    24642    partners 
   TABLE DATA           O   COPY public.partners (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   'p       }          0    24667    paymentMethods 
   TABLE DATA           N   COPY public."paymentMethods" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    234   �p       m          0    24601    profile 
   TABLE DATA           �   COPY public.profile (id, picture, "fullName", "phoneNumber", gender, profession, nasionality, "birthDate", "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    218   hq       y          0    24651    reservationSections 
   TABLE DATA           Z   COPY public."reservationSections" (id, name, price, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   �r       {          0    24660    reservationStatus 
   TABLE DATA           Q   COPY public."reservationStatus" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    232   5s       �          0    24681    reservationTickets 
   TABLE DATA           t   COPY public."reservationTickets" (id, "reservationId", "sectionId", quantity, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    238   �s                 0    24674    reservations 
   TABLE DATA           x   COPY public.reservations (id, "eventId", "userId", "statusId", "paymentMethodId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    236   u       k          0    24590    users 
   TABLE DATA           X   COPY public.users (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   v       �          0    24688 	   wishlists 
   TABLE DATA           V   COPY public.wishlists (id, "eventId", "userId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    240   �w       �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 13, true);
          public          postgres    false    219            �           0    0    cities_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cities_id_seq', 10, true);
          public          postgres    false    221            �           0    0    deviceToken_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."deviceToken_id_seq"', 111, true);
          public          postgres    false    243            �           0    0    eventCategories_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."eventCategories_id_seq"', 11, true);
          public          postgres    false    225            �           0    0    events_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.events_id_seq', 11, true);
          public          postgres    false    223            �           0    0    forgotRequest_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."forgotRequest_id_seq"', 8, true);
          public          postgres    false    241            �           0    0    partners_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.partners_id_seq', 6, true);
          public          postgres    false    227            �           0    0    paymentMethods_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."paymentMethods_id_seq"', 5, true);
          public          postgres    false    233            �           0    0    profile_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.profile_id_seq', 21, true);
          public          postgres    false    217            �           0    0    reservationSections_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."reservationSections_id_seq"', 4, true);
          public          postgres    false    229            �           0    0    reservationStatus_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."reservationStatus_id_seq"', 5, true);
          public          postgres    false    231            �           0    0    reservationTickets_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."reservationTickets_id_seq"', 31, true);
          public          postgres    false    237            �           0    0    reservations_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.reservations_id_seq', 30, true);
          public          postgres    false    235            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 45, true);
          public          postgres    false    215            �           0    0    wishlists_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.wishlists_id_seq', 8, true);
          public          postgres    false    239            �           2606    24615    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    220            �           2606    24624    cities cities_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pkey;
       public            postgres    false    222            �           2606    24728    deviceToken deviceToken_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."deviceToken"
    ADD CONSTRAINT "deviceToken_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."deviceToken" DROP CONSTRAINT "deviceToken_pkey";
       public            postgres    false    244            �           2606    24640 $   eventCategories eventCategories_pkey 
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
       public            postgres    false    240            o   �   x�mλ�0 ���� M��������Q�ƒ�~�F��p��<\�4q��B)s@R�,��
�4�oD��
�;�rp��k��ɕ(�} �Z_�=�c��>�[(��:��Q�i�i�2����U!4�<���E�J���U4]���k���lUQo�>3      q   �   x�eнN�@��~��@N;�w?�4THiND�
���
�6�i��<��(k2��󡻫o��Q;&�-��E1G���m����M򶞟?�{%�PH�Mz��&L)����2��h*"��ٹ��0!���yڿ�����b�K+S2�=��?3`Q���ʲ8~�{_W��8H��6�E+$b.ݟ��Yg�,�e��fw���o��Y�      �     x�՜�nb�@��_�?�U�����3 ���)�2t:��!_�6����@E�GKvժ������Ǐ?�������/_��q���~�����m�����j=�������ۿ���?�O�i���ެ�g��V����_�<�n_��&.N��!���������N�����/�x>�\�.O�;G���k�g���K���|��'O�!u�v����=��دD�ㆭA�6��ߝ/�7]�w������ˇnD����'�������\��������_G-8~:��F�����`������{)����l�����p4�x~^���mk������ɾ����׷/��b��w��K���\,�;�)>�\�����3���A��ذo8@�!fVbc#.+bU����B� ������ N-�D�5ޡM��k�@n�G�����V��S�!�D� ��D�2H�
�ܐ3�$������g 0��:Il�g"�s%������7���Z����/�T[���D_H4ʝv/qB=�8Ѩw�oS�]Ǻ�4
����!���h4�'����0`��F��H[b�X�_I��
=c,>!���lFr8c98k�F��W��R��XH1��]�㩘Q�o�s%�I��i�x!�l�nw�t���1O^����t|&I��(��N����� [z_���Jb��D�\%���Lb�O��z�Ei�ܽ;��\]�Ɠ��w���#9�޴Z닸��_��^���x;x�ڧۗ�����f�ztCo����p�9��ݐ���S�lt?iO��ܾ���n��|�W'��������y�#]}9��N/��׿�Ѽ������1�^>B7�? �~1�ҟ0�%I��y@(��Q'I>�k����THH-�+ww��Ղx��	�]��J�(/�����]���WHRK̛����{�$�T�˲����V�*�!��+*&q���UJa֨x�m<C1���%wY؛�:�>�઻z휯�<�V��#9�>�^mGå���I|�g���v���b��.�օ�z8t�������7�[�<.�z����ӟ��NXfa9?y�ظ�o[ۿ9�M����.�ñ}�O���Vo�F�8=���o����=-:�&���{���j�eQ1����`k���$W�'�&� J�bY-�t�dB�H%�e��$�^�.) mW��i%ɍ��.g�HX����'̶^I3���Qj��mW�ZIll\0ɻP/LmRK��&؄\����x��iI��%u9��w_��E'���Ө�J����]�d�iT|!�:!c�u��hT�'	��N�'/$(E��Am�F�˹���v�DN����C�R���.���$eH�bmO�F�W��'�b@�Y�kT|%���"�T�.������"���+u����;iN�n�Y�����.ƈ�'^���}��I��.���<�QrW��^�ᅃ�Q*��(5���R?&�I��R�S>�f���J���+aY���]y����T^�R,�^H�5م�g��g�緑���D��ٕZ%��L}Pkxy�@�r���Z��|)f��
��O�c��(5`�.:�������T+A���r�ؠ���x���}����\�D���/K�A0��P�u:C$ʣ����E���X^ ��![">�t��H� ��m�J���Bb}��eSt�䮨���
FW���S�$�F�%�̥��\�B>�#W��R�K�<�E��Rjx!��BKTB�;)5|,�@� _A�
>5�6��.s%��O���` "�	ȤT�)_8HIρC}⟔
>�REvW����@I����)_���Ԥ����DJ�`8�K5�u*>��|�*���~�F��|��.Ϩ����8Ѩx����t�-���o4:���|{"�0�jE�%?�-(�?/��(���(�95����ia�_!�ۡh}A��.����E_I$G|��:>��*E���Ȅ}��hT��q��n��t}��(�;'	lG�������M���#R�E���&���o,�Z�
Q��B�����˗/� C�G      u   �   x�e�ۭ1�o��m �7�"RA��#�#��:�G3 �����Au3�zkaE�����@ƹőUG�2

�'�C�a��o��$���.�s�:�7���.`�E�X�%;(g�8M�
���-S���D�D8Tt��ǌ�{�M<A+��b�m>�eq3���� �ڋ����D��s�|_x]��J�      s   C  x����n�  ��)��_>&Q�JQS)�zɅ�d��6.�&��e��\r�^|[���Y����&�u���o���E����l}a{�6�4vN7�?\J)R�,��/N!L���~!��7C��O��_�&}�A�^!v�iƲ{�MvS�뜇`#���oP�!�:�8yЍm������3�& c�л���4��ml3�����SHUtg�N:?&"���+�+*s���"{���"_��R�N
gd��������u��f=���/������;��E14gQT).�,O�w޻�N��g�0HEX�U�1��1*�cr���z�ܦ2�mg�2K�`9bL�Z�_����<م��=ǝM��v)�ݏ�\s&�\	�P:E�L*G���?�p��fOr�jo��m:H���g�DfjY$\�r�ԑD\B���(:4���e�v�߄֍s��DRV��p"�D^@B����P���N�`k�ӡ�n��,���Jk�H�?z`�E�Ӟ ��"*/��v��#�1��j{㽭�/���4.���Z�υ@��/�s�Z��O��      �      x������ � �      w   �   x�}�;�0E��^`4��xi�ҧ��_
�*D��ޥB�(��1�`__�o�g{F�u&��;R� oxL��|�4�v'���+fؐ�����&Ү�͠	!�>uHQS2���f���c�>-DېvJ7ָ�l t�ɐ~�#X�^�C� �!��~NP"      }   �   x�e̱
�0 �9���@��%��7Zu�.�F(J��ſ�����x��^�m7s�" o!X�@�L.&D�j9kR�����K{�j��>��s�8�W�����cl�� :�8!��hO�V�_ǣ���&��(����� �&�      m   B  x��Ͻn�0��������6f�:�j�HUԥ' �%0Ux���{��ٿ?BT{?�9瓛Y�K��Ŵ�r�xu��zu�ě��8���PT�t�Y-3ގ	��_�S�$9:?�Hd����&��9�����0ar[A$ 9b��J�Qۏ�b���
P�?q;"j��_�����H>��]���V�����J���л�)6:��)���R	B.1G�H[�U�b[��M���ܫ�MB�4�&�V���2�'�IiI��uý|�&�Q���u�����r�$�����m���Xx���a)���2��4�T���8�� ��      y   k   x�U�+�0@�>�/`��Ϯ�!QURP�E��[�f�0=^���<�; �Xa˂`�̕�5)m��wp����p(W��ƬFۼ���3�piU�v�w�)�/��[      {   ]   x�m�1
�0�9=�h��iZ�&��""����⛟�r���B�2j&Z���vo��[����%��A-��Bߤrn�¼�õ��.)�ќ�      �   m  x�m�ۑ�0�oRE�S���:�l6N2���W ���  $z#��]�RW��R�4��si���)��H��� ���sbZ��$9p���7c� {f���3m�32���w꿫TU����;�Z~0�}9�m�����5}�T���h��<Փ��M�����zt���YB�n��T�n���P���q��[�J�	A�g�ycmW/3N^��|����U/"�>�T ��:�����c�H��rv��ӏ˕�@ϱ�4M{,���e;���+Q�JQ"��6�q\�*v���	E�ӭnwƈG�ڇKVd�ǘ�~�j�}�,���gH���vu�jY'N�Н�59z�-��V�L;�/��/��4         �   x�m��m�0г\�6`�3$%�E�����H���x��a��5���Qi��I}�W1U�=?[��x��`�����zC,��+�����2�X7�S�q�+ ��}CxC6�ܟ�*FE�4�m|Y��E�,JC<ݣo�o�w:'0��2u��1�[�_9��d
����L�Y1�B�咼VX��q"�E��)��ۖ�Ȓ�.1oos Y�s�o��L�#c�����ݟr�'J�[      k   �  x���Ɏ�@ ��>�n�XEQ����3�6#鋲�,��ӏ�Μ}�/�ϣޗۻ���W��6���mh]qy�\'Pbʉ�1>��q���g�� ��i����Mu>��Hi`ft�I�����k�4���S�i�G%5�b��E�� �F���4�8A`B��C�4}�Y%��m�A�i�}���or�~�
�o�(�7�������^�W|���
T����r�f�YwX.�?�d �%C��E����_�K�W��Q���k�Ӹ*���%�
S��R�u�4R��u�������jݰӫv���^��� B��VzԒ�ŽP�圥�۪�t�+� #�f�9��2.��$�h��T��+ת��rtwgg#	�y���X�Q��ʈ�9�B������� <�P      �   �   x�m��1D�o��4��=~%.�
��:�,$�����!0�`;�]���u ���|4%���#u��F��}��ʣԇ��FNI���qe�TFx�c�إ7�C����9�
ܛ�.\�}Y��&�Eq���,���9ZkO�q/�     